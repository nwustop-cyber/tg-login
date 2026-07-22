CREATE TABLE IF NOT EXISTS users (
  telegram_id  INTEGER PRIMARY KEY,
  username     TEXT,
  first_name   TEXT,
  last_name    TEXT,
  photo_url    TEXT,
  source       TEXT NOT NULL,          -- 'widget' or 'bot'
  created_at   INTEGER NOT NULL,
  last_login   INTEGER NOT NULL,
  login_count  INTEGER NOT NULL DEFAULT 1
);

CREATE INDEX IF NOT EXISTS idx_users_last_login ON users(last_login DESC);
