// Cloudflare Worker: Telegram Login (Widget + OTP) + Users API
// Supports both cookie sessions (dashboard) and Bearer token sessions (extension)

const enc = new TextEncoder();

// ─── helpers ───────────────────────────────────────────────────────────────

const json = (data, init = {}) =>
  new Response(JSON.stringify(data), {
    ...init,
    headers: { "content-type": "application/json", ...(init.headers || {}) },
  });

function corsHeaders(req) {
  const origin = req.headers.get("Origin") || "";
  // Allow Pages domain, any Chrome extension, and Firefox extension
  const allowed =
    origin.startsWith("chrome-extension://") ||
    origin.startsWith("moz-extension://") ||
    origin === (globalThis.__ENV_ALLOWED_ORIGIN__ || "");
  return {
    "Access-Control-Allow-Origin": allowed ? origin : "",
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
    "Access-Control-Allow-Headers": "content-type,authorization",
    Vary: "Origin",
  };
}

function buildCors(env, req) {
  const origin = req.headers.get("Origin") || "";
  const allowedOrigin = env.ALLOWED_ORIGIN || "";
  const ok =
    origin.startsWith("chrome-extension://") ||
    origin.startsWith("moz-extension://") ||
    origin === allowedOrigin ||
    allowedOrigin === "*";
  return {
    "Access-Control-Allow-Origin": ok ? origin || allowedOrigin : allowedOrigin,
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
    "Access-Control-Allow-Headers": "content-type,authorization",
    Vary: "Origin",
  };
}

async function sha256(buf) {
  return new Uint8Array(await crypto.subtle.digest("SHA-256", buf));
}

async function hmacSha256(keyBytes, msg) {
  const key = await crypto.subtle.importKey(
    "raw", keyBytes, { name: "HMAC", hash: "SHA-256" }, false, ["sign"],
  );
  const sig = await crypto.subtle.sign("HMAC", key, enc.encode(msg));
  return new Uint8Array(sig);
}

const toHex = (u8) =>
  Array.from(u8).map((b) => b.toString(16).padStart(2, "0")).join("");

const b64url = (u8) =>
  btoa(String.fromCharCode(...u8))
    .replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");

const b64urlDecode = (s) => {
  s = s.replace(/-/g, "+").replace(/_/g, "/");
  while (s.length % 4) s += "=";
  return Uint8Array.from(atob(s), (c) => c.charCodeAt(0));
};

// ─── Telegram Widget verification ─────────────────────────────────────────

async function verifyTelegramAuth(data, botToken) {
  const { hash, ...fields } = data;
  if (!hash) return false;
  const dataCheckString = Object.keys(fields).sort()
    .map((k) => `${k}=${fields[k]}`).join("\n");
  const secret = await sha256(enc.encode(botToken));
  const sig = await hmacSha256(secret, dataCheckString);
  if (toHex(sig) !== String(hash).toLowerCase()) return false;
  if (Math.floor(Date.now() / 1000) - Number(fields.auth_date) > 86400) return false;
  return true;
}

// ─── Session token (HMAC-signed, JWT-like) ─────────────────────────────────

async function signSession(payload, secret) {
  const body = b64url(enc.encode(JSON.stringify(payload)));
  const sig = await hmacSha256(enc.encode(secret), body);
  return `${body}.${b64url(sig)}`;
}

async function verifySession(token, secret) {
  if (!token || !token.includes(".")) return null;
  const [body, sig] = token.split(".");
  const expected = await hmacSha256(enc.encode(secret), body);
  if (b64url(expected) !== sig) return null;
  try {
    const payload = JSON.parse(new TextDecoder().decode(b64urlDecode(body)));
    if (payload.exp && payload.exp < Math.floor(Date.now() / 1000)) return null;
    return payload;
  } catch { return null; }
}

// Accepts both cookie and Authorization: Bearer <token>
async function getSession(req, env) {
  // 1. Bearer token (extension)
  const auth = req.headers.get("Authorization") || "";
  if (auth.startsWith("Bearer ")) {
    return verifySession(auth.slice(7), env.SESSION_SECRET);
  }
  // 2. Cookie (dashboard)
  const c = req.headers.get("Cookie") || "";
  const m = c.match(/(?:^|; )session=([^;]+)/);
  return m ? verifySession(decodeURIComponent(m[1]), env.SESSION_SECRET) : null;
}

function cookieHeader(name, value, { maxAge = 60 * 60 * 24 * 30 } = {}) {
  return [
    `${name}=${encodeURIComponent(value)}`,
    "Path=/", "HttpOnly", "Secure", "SameSite=None", `Max-Age=${maxAge}`,
  ].join("; ");
}

function isAdmin(env, telegramId) {
  return (env.ADMIN_TELEGRAM_IDS || "")
    .split(",").map((x) => x.trim()).filter(Boolean)
    .includes(String(telegramId));
}

// ─── DB helpers ────────────────────────────────────────────────────────────

async function upsertUser(env, u, source) {
  const now = Math.floor(Date.now() / 1000);
  await env.DB.prepare(
    `INSERT INTO users (telegram_id, username, first_name, last_name, photo_url, source, created_at, last_login, login_count)
     VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?7, 1)
     ON CONFLICT(telegram_id) DO UPDATE SET
       username    = excluded.username,
       first_name  = excluded.first_name,
       last_name   = excluded.last_name,
       photo_url   = COALESCE(excluded.photo_url, users.photo_url),
       last_login  = excluded.last_login,
       login_count = users.login_count + 1`,
  ).bind(
    u.id ?? u.telegram_id,
    u.username || null,
    u.first_name || null,
    u.last_name || null,
    u.photo_url || null,
    source,
    now,
  ).run();
}

async function sendTelegramMessage(env, chatId, text) {
  return fetch(`https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text, parse_mode: "Markdown" }),
  });
}

// ─── Router ────────────────────────────────────────────────────────────────

export default {
  async fetch(req, env) {
    const url = new URL(req.url);
    const cors = buildCors(env, req);

    if (req.method === "OPTIONS") return new Response(null, { headers: cors });

    try {

      // ── POST /auth/telegram  (Login Widget) ──────────────────────────────
      if (url.pathname === "/auth/telegram" && req.method === "POST") {
        const data = await req.json();
        if (!await verifyTelegramAuth(data, env.TELEGRAM_BOT_TOKEN))
          return json({ error: "invalid_signature" }, { status: 401, headers: cors });

        await upsertUser(env, data, "widget");
        const now = Math.floor(Date.now() / 1000);
        const token = await signSession({
          sub: data.id,
          username: data.username || null,
          name: [data.first_name, data.last_name].filter(Boolean).join(" "),
          photo: data.photo_url || null,
          iat: now, exp: now + 86400 * 30,
        }, env.SESSION_SECRET);

        return json({ ok: true, token }, {
          headers: { ...cors, "Set-Cookie": cookieHeader("session", token) },
        });
      }

      // ── POST /auth/otp/request  (Extension step 1) ───────────────────────
      if (url.pathname === "/auth/otp/request" && req.method === "POST") {
        const { identifier } = await req.json();
        if (!identifier)
          return json({ error: "identifier_required" }, { status: 400, headers: cors });

        const clean = String(identifier).replace(/^@/, "").trim();

        // Look up user by numeric ID or username
        let user;
        if (/^\d+$/.test(clean)) {
          user = await env.DB.prepare(
            "SELECT * FROM users WHERE telegram_id = ?",
          ).bind(Number(clean)).first();
        } else {
          user = await env.DB.prepare(
            "SELECT * FROM users WHERE LOWER(username) = LOWER(?)",
          ).bind(clean).first();
        }

        if (!user) {
          return json({
            error: "not_registered",
            message: `User not found. Please send /start to @${env.TELEGRAM_BOT_USERNAME} in Telegram first, then try again.`,
          }, { status: 404, headers: cors });
        }

        // Generate 6-digit OTP
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        const expiresAt = Math.floor(Date.now() / 1000) + 600; // 10 min

        // Expire old unused OTPs for this user
        await env.DB.prepare(
          "UPDATE otp_requests SET used = 1 WHERE telegram_id = ? AND used = 0",
        ).bind(user.telegram_id).run();

        // Store new OTP
        await env.DB.prepare(
          "INSERT INTO otp_requests (telegram_id, otp, expires_at) VALUES (?, ?, ?)",
        ).bind(user.telegram_id, otp, expiresAt).run();

        // Send OTP via bot
        await sendTelegramMessage(
          env, user.telegram_id,
          `🔐 *Your DaemonERA login OTP is:*\n\`${otp}\`\n\nValid for 10 minutes. Do not share this code with anyone.`,
        );

        return json({
          ok: true,
          telegram_id: user.telegram_id,
          name: [user.first_name, user.last_name].filter(Boolean).join(" "),
        }, { headers: cors });
      }

      // ── POST /auth/otp/verify  (Extension step 2) ────────────────────────
      if (url.pathname === "/auth/otp/verify" && req.method === "POST") {
        const { telegram_id, otp } = await req.json();
        if (!telegram_id || !otp)
          return json({ error: "missing_fields" }, { status: 400, headers: cors });

        const now = Math.floor(Date.now() / 1000);
        const record = await env.DB.prepare(
          `SELECT * FROM otp_requests
           WHERE telegram_id = ? AND otp = ? AND expires_at > ? AND used = 0
           ORDER BY id DESC LIMIT 1`,
        ).bind(telegram_id, String(otp), now).first();

        if (!record)
          return json({ error: "invalid_otp", message: "OTP is incorrect or has expired." }, { status: 401, headers: cors });

        // Mark OTP as used
        await env.DB.prepare("UPDATE otp_requests SET used = 1 WHERE id = ?")
          .bind(record.id).run();

        // Update user last login
        await env.DB.prepare(
          "UPDATE users SET last_login = ?, login_count = login_count + 1 WHERE telegram_id = ?",
        ).bind(now, telegram_id).run();

        const user = await env.DB.prepare(
          "SELECT * FROM users WHERE telegram_id = ?",
        ).bind(telegram_id).first();

        const token = await signSession({
          sub: user.telegram_id,
          username: user.username || null,
          name: [user.first_name, user.last_name].filter(Boolean).join(" "),
          photo: user.photo_url || null,
          iat: now, exp: now + 86400 * 30,
        }, env.SESSION_SECRET);

        // Notify user of successful login
        await sendTelegramMessage(
          env, telegram_id,
          `✅ Logged in to DaemonERA successfully!\n\nIf this wasn't you, contact support immediately.`,
        );

        return json({
          ok: true,
          token,
          user: {
            id: user.telegram_id,
            username: user.username,
            name: [user.first_name, user.last_name].filter(Boolean).join(" "),
            photo: user.photo_url,
            is_admin: isAdmin(env, user.telegram_id),
          },
        }, { headers: cors });
      }

      // ── GET /me ───────────────────────────────────────────────────────────
      if (url.pathname === "/me" && req.method === "GET") {
        const s = await getSession(req, env);
        if (!s) return json({ user: null }, { headers: cors });
        return json({
          user: { ...s, is_admin: isAdmin(env, s.sub) },
        }, { headers: cors });
      }

      // ── POST /logout ──────────────────────────────────────────────────────
      if (url.pathname === "/logout" && req.method === "POST") {
        return json({ ok: true }, {
          headers: { ...cors, "Set-Cookie": cookieHeader("session", "", { maxAge: 0 }) },
        });
      }

      // ── GET /admin/users ──────────────────────────────────────────────────
      if (url.pathname === "/admin/users" && req.method === "GET") {
        const s = await getSession(req, env);
        if (!s || !isAdmin(env, s.sub))
          return json({ error: "forbidden" }, { status: 403, headers: cors });

        const { results } = await env.DB.prepare(
          `SELECT telegram_id, username, first_name, last_name, photo_url,
                  source, created_at, last_login, login_count
           FROM users ORDER BY last_login DESC LIMIT 500`,
        ).all();
        return json({ users: results }, { headers: cors });
      }

      // ── POST /telegram/webhook ────────────────────────────────────────────
      if (url.pathname === "/telegram/webhook" && req.method === "POST") {
        const update = await req.json();
        const msg = update.message || update.edited_message;
        if (msg?.from && (msg.text || "").startsWith("/start")) {
          await upsertUser(env, msg.from, "bot");
          await sendTelegramMessage(
            env, msg.chat.id,
            `Hi ${msg.from.first_name || ""}\\! You're registered ✅\n\nYou can now log in to the DaemonERA extension using your username or Telegram ID:\n*Your ID:* \`${msg.from.id}\`\n\nDashboard: ${env.ALLOWED_ORIGIN}`,
          );
        }
        return json({ ok: true });
      }

      return json({ error: "not_found" }, { status: 404, headers: cors });

    } catch (err) {
      return json({ error: "server_error", message: String(err) }, { status: 500, headers: cors });
    }
  },
};
