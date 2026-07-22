Telegram Bot Login + Users Dashboard (Cloudflare + GitHub)
A production-ready starter that gives you:
Telegram Login Widget on your dashboard (users click "Log in with Telegram")
Cloudflare Worker backend (`/worker`) that verifies the Telegram HMAC signature, stores users in D1 (SQLite), and issues an HttpOnly session cookie (JWT-signed)
Cloudflare Pages dashboard (`/dashboard`) with a login page + admin users table
Telegram bot webhook so every `/start` from the bot also registers the user
GitHub Actions to auto-deploy Worker + Pages on push
```
tg-login/
├── worker/         # Cloudflare Worker (API + Telegram webhook)
├── dashboard/      # Static site deployed to Cloudflare Pages
└── .github/workflows/deploy.yml
```
---
1. Prerequisites
A Telegram bot from @BotFather → note the bot token and bot username (e.g. `MyLoginBot`).
A Cloudflare account (free tier is fine). In `dash.cloudflare.com` grab:
Account ID (right sidebar of any zone / Workers page)
An API Token with permissions: Account → Workers Scripts: Edit, Account → D1: Edit, Account → Cloudflare Pages: Edit, Zone → Zone: Read (create at My Profile → API Tokens → Create Token → Edit Cloudflare Workers template, then add D1 + Pages).
A GitHub repository (push this folder to it).
---
2. One-time Cloudflare setup
```bash
npm i -g wrangler
wrangler login

# From ./worker
cd worker
npm install

# Create D1 database
wrangler d1 create tg_login_db
# → copy the "database_id" it prints into worker/wrangler.toml
wrangler d1 execute tg_login_db --remote --file=./schema.sql

# Store secrets
wrangler secret put TELEGRAM_BOT_TOKEN     # paste your bot token
wrangler secret put TELEGRAM_BOT_USERNAME  # e.g. MyLoginBot   (no @)
wrangler secret put SESSION_SECRET         # any 32+ char random string
wrangler secret put ADMIN_TELEGRAM_IDS     # comma-separated numeric IDs allowed to see dashboard

# Deploy
wrangler deploy
# → note the URL, e.g. https://tg-login-api.YOURSUB.workers.dev
```
Register the bot webhook so `/start` messages hit your Worker:
```bash
curl "https://api.telegram.org/bot<TOKEN>/setWebhook?url=https://tg-login-api.YOURSUB.workers.dev/telegram/webhook"
```
Tell Telegram which domain is allowed to host the Login Widget:
BotFather → `/setdomain` → send your Pages domain (e.g. `tg-login.pages.dev`).
---
3. Deploy the dashboard (Cloudflare Pages)
Option A — from the Cloudflare dashboard (recommended):
`dash.cloudflare.com` → Workers & Pages → Create → Pages → Connect to Git.
Pick your GitHub repo, set:
Build command: (empty)
Build output directory: `dashboard/public`
Root directory: `/`
Add env vars (Settings → Environment variables):
`BOT_USERNAME` = your bot username
`API_BASE`    = your Worker URL
Save & Deploy.
Option B — CLI:
```bash
cd dashboard
wrangler pages deploy public --project-name tg-login
```
Edit `dashboard/public/config.js` to point at your Worker URL and bot username (or let the build inject it — see file comments).
---
4. GitHub auto-deploy
Add these repo secrets (Settings → Secrets and variables → Actions):
Name	Value
`CLOUDFLARE_API_TOKEN`	the API token from step 1
`CLOUDFLARE_ACCOUNT_ID`	your Cloudflare account id
Push to `main` → `.github/workflows/deploy.yml` deploys Worker and Pages automatically.
---
5. How the login flow works
User clicks the Telegram Login Widget on the dashboard.
Telegram redirects back with `id, first_name, username, photo_url, auth_date, hash`.
Dashboard POSTs that payload to `POST /auth/telegram` on the Worker.
Worker recomputes `HMAC_SHA256(sorted data_check_string, SHA256(bot_token))` and compares to `hash` — this is Telegram's official verification.
On success it upserts the user into D1 and sets an HttpOnly cookie `session=<JWT>`.
Dashboard calls `GET /me` (returns the current user) and, for admins, `GET /admin/users` (returns the full user table).
---
6. Endpoints
Method	Path	Purpose
`POST`	`/auth/telegram`	Verify widget payload → set session cookie
`GET`	`/me`	Current logged-in user
`POST`	`/logout`	Clear cookie
`GET`	`/admin/users`	List all users (admin only)
`POST`	`/telegram/webhook`	Bot webhook — captures `/start` users
That's it. See file comments for details.
