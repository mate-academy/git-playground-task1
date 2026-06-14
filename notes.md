# Lesson 1 — read the repo

## My prediction (from memory)
I added a `count` function in `lib/store.js` and made `list` print the total number of notes.

## Claude's summary
- `lib/store.js`: added `count()` (returns the number of notes) and exported it; renamed the local `before` to `prevCount` in `remove()`.
- `notes.js`: `list` now prints a trailing `(N note(s) total)` line.
- `lib/config.js`: `SESSION_TIMEOUT_MINUTES` changed from `15` to `30` — flagged as possibly unintended.

## Did it catch the stray change?
Yes. I forgot the `lib/config.js` timeout edit in my prediction, and Claude flagged it as the unintended change.

