# Lesson 1 — let Claude read the repo

## Prediction (from memory)
I tweaked the usage message in `notes.js`, renamed a variable and added a `count()` helper in `lib/store.js`.

## Claude's summary
- `notes.js`: the empty-note usage message changed from `notes add <your note>` to `notes add <text>`.
- `lib/store.js`: in `remove()`, the local variable `before` was renamed to `countBefore` (behaviour unchanged); a new `count()` function was added and exported. Nothing calls it yet.
- `lib/config.js`: `SESSION_TIMEOUT_MINUTES` went from 15 to 5. **Looks unintended**: it's in a file not otherwise touched, isn't related to the other edits, and it changes behaviour (the session now locks three times sooner).

## Did Claude catch the stray change?
Yes — the session-timeout change in `lib/config.js` wasn't in my prediction, and Claude flagged it as likely unintended.
