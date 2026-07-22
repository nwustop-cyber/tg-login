// DaemonERA Extension Popup — Telegram OTP Login
// Update API_BASE if your Worker URL changes.

const API_BASE   = "https://tg-login-api.water6k.workers.dev";
const DASHBOARD  = "https://tg-login-30e.pages.dev/dashboard.html";

// ─── state ──────────────────────────────────────────────────────────────────

let currentTelegramId = null; // set after step 1 succeeds

// ─── helpers ────────────────────────────────────────────────────────────────

const $ = (id) => document.getElementById(id);

function showPage(id) {
  document.querySelectorAll(".page").forEach((p) => p.classList.remove("active"));
  $(id).classList.add("active");
}

function showAlert(elId, msg, type = "error") {
  const el = $(elId);
  el.className = `alert alert-${type} show`;
  el.textContent = msg;
}

function hideAlert(elId) {
  const el = $(elId);
  el.className = "alert";
  el.textContent = "";
}

function setLoading(btn, loading, label) {
  btn.disabled = loading;
  btn.innerHTML = loading
    ? `<span class="spinner"></span> ${label}`
    : label;
}

async function apiFetch(path, body) {
  const { token } = await chrome.storage.local.get("token");
  const headers = { "content-type": "application/json" };
  if (token) headers["Authorization"] = `Bearer ${token}`;
  return fetch(API_BASE + path, {
    method: body ? "POST" : "GET",
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });
}

// ─── init: check existing session ───────────────────────────────────────────

async function init() {
  try {
    const { token } = await chrome.storage.local.get("token");
    if (!token) return showPage("page-identify");

    const r = await fetch(API_BASE + "/me", {
      headers: { Authorization: `Bearer ${token}` },
    });
    const { user } = await r.json();
    if (user) {
      renderLoggedIn(user);
    } else {
      await chrome.storage.local.remove("token");
      showPage("page-identify");
    }
  } catch {
    showPage("page-identify");
  }
}

// ─── render logged-in state ──────────────────────────────────────────────────

function renderLoggedIn(user) {
  showPage("page-loggedin");

  const name = user.name || user.username || `ID ${user.sub}`;
  $("user-name").textContent =
    name + (user.is_admin ? "" : "");
  if (user.is_admin) {
    const badge = document.createElement("span");
    badge.className = "badge";
    badge.textContent = "admin";
    $("user-name").appendChild(badge);
  }

  const meta = [];
  if (user.username) meta.push(`@${user.username}`);
  meta.push(`ID: ${user.sub}`);
  $("user-meta").textContent = meta.join(" · ");

  const avatarEl = $("user-avatar");
  if (user.photo) {
    const img = document.createElement("img");
    img.src = user.photo;
    img.className = "avatar";
    img.alt = name;
    img.onerror = () => { avatarEl.textContent = "👤"; };
    avatarEl.replaceWith(img);
  }
}

// ─── step 1: send OTP ───────────────────────────────────────────────────────

$("btn-send-otp").addEventListener("click", async () => {
  const identifier = $("identifier").value.trim();
  if (!identifier) {
    showAlert("alert-identify", "Please enter your Telegram username or ID.");
    return;
  }
  hideAlert("alert-identify");
  const btn = $("btn-send-otp");
  setLoading(btn, true, "Sending OTP…");

  try {
    const r = await apiFetch("/auth/otp/request", { identifier });
    const data = await r.json();

    if (!r.ok) {
      showAlert("alert-identify", data.message || "Failed to send OTP. Try again.");
      setLoading(btn, false, "Send OTP to Telegram");
      return;
    }

    currentTelegramId = data.telegram_id;
    showPage("page-otp");
    $("otp").focus();
  } catch (err) {
    showAlert("alert-identify", "Network error. Check your connection.");
    setLoading(btn, false, "Send OTP to Telegram");
  }
});

// Allow pressing Enter on identifier input
$("identifier").addEventListener("keydown", (e) => {
  if (e.key === "Enter") $("btn-send-otp").click();
});

// ─── step 2: verify OTP ─────────────────────────────────────────────────────

$("btn-verify-otp").addEventListener("click", async () => {
  const otp = $("otp").value.trim();
  if (otp.length !== 6 || !/^\d{6}$/.test(otp)) {
    showAlert("alert-otp", "Enter the 6-digit OTP from Telegram.");
    return;
  }
  hideAlert("alert-otp");
  const btn = $("btn-verify-otp");
  setLoading(btn, true, "Verifying…");

  try {
    const r = await apiFetch("/auth/otp/verify", {
      telegram_id: currentTelegramId,
      otp,
    });
    const data = await r.json();

    if (!r.ok) {
      showAlert("alert-otp", data.message || "Invalid or expired OTP. Try again.");
      setLoading(btn, false, "Verify OTP");
      return;
    }

    // Store token
    await chrome.storage.local.set({ token: data.token });
    renderLoggedIn(data.user);
  } catch (err) {
    showAlert("alert-otp", "Network error. Check your connection.");
    setLoading(btn, false, "Verify OTP");
  }
});

// Allow pressing Enter on OTP input
$("otp").addEventListener("keydown", (e) => {
  if (e.key === "Enter") $("btn-verify-otp").click();
});

// Auto-submit when 6 digits entered
$("otp").addEventListener("input", () => {
  const val = $("otp").value.replace(/\D/g, "").slice(0, 6);
  $("otp").value = val;
  if (val.length === 6) $("btn-verify-otp").click();
});

// ─── back button ────────────────────────────────────────────────────────────

$("btn-back").addEventListener("click", () => {
  currentTelegramId = null;
  hideAlert("alert-otp");
  $("otp").value = "";
  showPage("page-identify");
});

// ─── open dashboard ──────────────────────────────────────────────────────────

$("btn-dashboard").addEventListener("click", async () => {
  const { token } = await chrome.storage.local.get("token");
  // Pass token as URL param so dashboard can use it without a cookie
  const url = `${DASHBOARD}?token=${encodeURIComponent(token)}`;
  chrome.tabs.create({ url });
});

// ─── logout ──────────────────────────────────────────────────────────────────

$("btn-logout").addEventListener("click", async () => {
  await chrome.storage.local.remove("token");
  // Also clear any server-side cookie session
  try { await apiFetch("/logout", {}); } catch {}
  currentTelegramId = null;
  $("identifier").value = "";
  $("otp").value = "";
  showPage("page-identify");
});

// ─── boot ────────────────────────────────────────────────────────────────────

init();
