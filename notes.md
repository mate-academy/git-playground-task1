Renamed `SESSION_TIMEOUT_MINUTES` → `IDLE_TIMEOUT_MINUTES` (bumped 15 → 30) in `lib/config.js`, added a `find(id)` helper to `lib/store.js`, and updated the matching reference in `notes.js`.

## Diff summary

- `lib/config.js` — Renamed `SESSION_TIMEOUT_MINUTES` → `IDLE_TIMEOUT_MINUTES`, value 15 → 30
- `lib/store.js` — Added `find(id)` helper; exported it alongside the existing functions
- `notes.js` — Updated the template literal to reference the renamed `IDLE_TIMEOUT_MINUTES`
- `notes.md` — Untracked file (this file); not meant to be committed

The summary caught the stray change: the `notes.js` template literal update was listed explicitly, matching the prediction.
