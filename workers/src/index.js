// Cloudflare Worker: Telegram Login + Users API
// See ../../README.md for the flow.

const enc = new TextEncoder();

// ---------- helpers ----------

const json = (data, init = {}) =>
  new Response(JSON.stringify(data), {
    ...init,
    headers: { "content-type": "application/json", ...(init.headers || {}) },
  });

function corsHeaders(env, req) {
  const origin = req.headers.get("Origin") || "";
  const allow = env.ALLOWED_ORIGIN || "";
  const ok = allow === "*" || origin === allow;
  return {
    "Access-Control-Allow-Origin": ok ? origin || allow : allow,
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
    "Access-Control-Allow-Headers": "content-type",
    Vary: "Origin",
  };
}

async function sha256(buf) {
  return new Uint8Array(await crypto.subtle.digest("SHA-256", buf));
}

async function hmacSha256(keyBytes, msg) {
  const key = await crypto.subtle.importKey(
    "raw",
    keyBytes,
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
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

// ---------- Telegram Login Widget verification ----------
// https://core.telegram.org/widgets/login#checking-authorization

async function verifyTelegramAuth(data, botToken) {
  const { hash, ...fields } = data;
  if (!hash) return false;
  const dataCheckString = Object.keys(fields)
    .sort()
    .map((k) => `${k}=${fields[k]}`)
    .join("\n");
  const secret = await sha256(enc.encode(botToken));
  const sig = await hmacSha256(secret, dataCheckString);
  if (toHex(sig) !== String(hash).toLowerCase()) return false;
  // reject payloads older than 1 day
  if (Math.floor(Date.now() / 1000) - Number(fields.auth_date) > 86400) return false;
  return true;
}

// ---------- Session (compact HMAC-signed token, JWT-like) ----------

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
  } catch {
    return null;
  }
}

function getCookie(req, name) {
  const c = req.headers.get("Cookie") || "";
  const m = c.match(new RegExp(`(?:^|; )${name}=([^;]+)`));
  return m ? decodeURIComponent(m[1]) : null;
}

function cookieHeader(name, value, { maxAge = 60 * 60 * 24 * 30 } = {}) {
  const parts = [
    `${name}=${encodeURIComponent(value)}`,
    "Path=/",
    "HttpOnly",
    "Secure",
    "SameSite=None",
    `Max-Age=${maxAge}`,
  ];
  return parts.join("; ");
}

// ---------- DB ----------

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
  )
    .bind(
      u.id, u.username || null, u.first_name || null, u.last_name || null,
      u.photo_url || null, source, now,
    )
    .run();
}

// ---------- router ----------

export default {
  async fetch(req, env) {
    const url = new URL(req.url);
    const cors = corsHeaders(env, req);

    if (req.method === "OPTIONS") return new Response(null, { headers: cors });

    try {
      // ---- POST /auth/telegram : verify widget payload, set cookie ----
      if (url.pathname === "/auth/telegram" && req.method === "POST") {
        const data = await req.json();
        const ok = await verifyTelegramAuth(data, env.TELEGRAM_BOT_TOKEN);
        if (!ok) return json({ error: "invalid_signature" }, { status: 401, headers: cors });

        await upsertUser(env, data, "widget");

        const token = await signSession(
          {
            sub: data.id,
            username: data.username || null,
            name: [data.first_name, data.last_name].filter(Boolean).join(" "),
            photo: data.photo_url || null,
            iat: Math.floor(Date.now() / 1000),
            exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
          },
          env.SESSION_SECRET,
        );

        return json(
          { ok: true },
          { headers: { ...cors, "Set-Cookie": cookieHeader("session", token) } },
        );
      }

      // ---- GET /me ----
      if (url.pathname === "/me" && req.method === "GET") {
        const s = await verifySession(getCookie(req, "session"), env.SESSION_SECRET);
        if (!s) return json({ user: null }, { headers: cors });
        const admins = (env.ADMIN_TELEGRAM_IDS || "")
          .split(",").map((x) => x.trim()).filter(Boolean);
        return json(
          { user: { ...s, is_admin: admins.includes(String(s.sub)) } },
          { headers: cors },
        );
      }

      // ---- POST /logout ----
      if (url.pathname === "/logout" && req.method === "POST") {
        return json(
          { ok: true },
          { headers: { ...cors, "Set-Cookie": cookieHeader("session", "", { maxAge: 0 }) } },
        );
      }

      // ---- GET /admin/users ----
      if (url.pathname === "/admin/users" && req.method === "GET") {
        const s = await verifySession(getCookie(req, "session"), env.SESSION_SECRET);
        const admins = (env.ADMIN_TELEGRAM_IDS || "")
          .split(",").map((x) => x.trim()).filter(Boolean);
        if (!s || !admins.includes(String(s.sub)))
          return json({ error: "forbidden" }, { status: 403, headers: cors });

        const { results } = await env.DB.prepare(
          `SELECT telegram_id, username, first_name, last_name, photo_url,
                  source, created_at, last_login, login_count
           FROM users ORDER BY last_login DESC LIMIT 500`,
        ).all();
        return json({ users: results }, { headers: cors });
      }

      // ---- POST /telegram/webhook : bot updates ----
      if (url.pathname === "/telegram/webhook" && req.method === "POST") {
        const update = await req.json();
        const msg = update.message || update.edited_message;
        if (msg?.from && (msg.text || "").startsWith("/start")) {
          await upsertUser(env, msg.from, "bot");
          // greet user
          await fetch(
            `https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`,
            {
              method: "POST",
              headers: { "content-type": "application/json" },
              body: JSON.stringify({
                chat_id: msg.chat.id,
                text: `Hi ${msg.from.first_name || ""}! You're registered ✅\nOpen the dashboard: ${env.ALLOWED_ORIGIN}`,
              }),
            },
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
