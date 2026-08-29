# Lesson 1 — read the repo

## My prediction (from memory)

I added a `count()` helper in `lib/store.js` and made the `list` command print a total, and I reworded the "no notes yet" message in `notes.js`.

## Claude's summary of what changed

- **notes.js** (`list` command): reworded the empty-state message from
  "Add one with..." to "Add your first with...", and added a
  `console.log(`(${store.count()} total)`)` line after the notes are printed.
- **lib/store.js**: added a new `count()` function that returns
  `load().notes.length`, and exported it (`module.exports = { all, add, remove, count }`).
  Also renamed the local variable `before` to `previousCount` inside `remove()`.
- **lib/config.js**: `SESSION_TIMEOUT_MINUTES` changed from `15` to `20`.

### Possibly unintended

The `lib/config.js` change (`15` → `20`) looks unrelated to the notes-count
feature. It changes app behaviour (session lock timeout) and wasn't mentioned in
the prediction — likely a stray edit that should be reverted or split into its
own change.

## Did Claude catch the stray change?

Yes. My prediction only covered the `count()` helper and the message wording; I
forgot the `SESSION_TIMEOUT_MINUTES` edit in `lib/config.js`, and Claude flagged
it as unrelated and probably unintended.
