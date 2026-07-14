## Summary of changes

- **`lib/store.js`** — added a new `count()` function (returns `load().notes.length`) and exported it alongside `all`, `add`, `remove`.
- **`notes.js`** — the `list` command now prints a `"N note(s):"` line (using the new `store.count()`) before listing notes; in the `delete` command, the local variable `ok` was renamed to `deleted` (no behavior change).
- **`lib/config.js`** — `SESSION_TIMEOUT_MINUTES` changed from `15` to `20`. This one is easy to miss: it's a single-line numeric tweak in a file the other two changes don't touch, with no related code change nearby to draw attention to it.

**Flagged as possibly unintended:** the `SESSION_TIMEOUT_MINUTES` bump in `lib/config.js` — it's unrelated to the notes-listing/rename work in the other two files, so if that wasn't deliberate, it's the one to double-check.
