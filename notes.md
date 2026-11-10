Prediction: I reworded the usage message in notes.js, renamed `before` to `countBefore` and added a `count()` function in lib/store.js, and bumped SESSION_TIMEOUT_MINUTES in lib/config.js.

## Claude's summary

Changes (3 files modified, 4 edits):
- `notes.js`: usage message for `add` reworded to `Usage: notes add <text of your note>`.
- `lib/store.js`: local variable `before` renamed to `countBefore` in `remove()` (both uses updated, behavior unchanged); new `count()` function returning the number of notes, exported from the module.
- `lib/config.js`: `SESSION_TIMEOUT_MINUTES` changed from 15 to 30.

Flagged as unintended / worth a look:
- `lib/config.js`: the timeout doubling is a real behavior change, unrelated to the other edits. It also surfaces in the default help output of `notes.js` ("Session locks after N minutes"). Confirm it's deliberate; otherwise revert it.
- `lib/store.js`: `count()` is exported but not called anywhere yet (dead code for now).
