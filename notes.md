# Lesson 1 — read the repo

## My prediction (from memory)
I added a `count()` helper in `lib/store.js` and reworded the usage/help line in `notes.js`.

## Claude's summary
Three files changed:

- **`lib/store.js`** — added a `count()` function that returns the number of stored notes, and exported it (`module.exports = { all, add, remove, count }`). Also renamed the local variable `before` to `countBefore` inside `remove()` (no behaviour change).
- **`notes.js`** — the default/help branch now prints `Usage: notes <add|list|delete> [args]` instead of `Commands: add <text> | list | delete <id>`. Text only.
- **`lib/config.js`** — `SESSION_TIMEOUT_MINUTES` changed from `15` to `20`.

### Flagged as possibly unintended
- The `lib/config.js` change (`15` → `20`) is a behaviour change in a second file that the prediction didn't mention — looks like a stray edit.
- `count()` is exported but not used anywhere yet (no caller in `notes.js`). Fine if intentional, dead code otherwise.

## Did Claude catch the stray change?
Yes. My prediction only covered `lib/store.js` and `notes.js`; Claude caught the forgotten `SESSION_TIMEOUT_MINUTES` change in `lib/config.js` and flagged it as unintended.
