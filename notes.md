# Lesson 1 — Read the repo

## My prediction (from memory)

I extracted the note-printing line in `notes.js` into a small `formatNote` helper
and added a `count()` function to `lib/store.js`.

## Claude's summary

Summarize what I've changed, and flag anything that looks unintended:

- **notes.js**: Added a new `formatNote(note)` helper function and replaced the
  inline template string in the `list` case with a call to it. Pure refactor,
  same output.
- **lib/store.js**: Added a new `count()` function that returns
  `load().notes.length`, and exported it alongside the existing functions.
  New functionality, not used anywhere yet.
- **lib/config.js**: Changed `SESSION_TIMEOUT_MINUTES` from `15` to `20`. ⚠️
  This file isn't touched by the other two changes and isn't mentioned in the
  prediction above — flagging it as a likely unintended/stray edit worth a
  second look before merging.

## Did it catch the stray change?

Yes — it correctly flagged the `SESSION_TIMEOUT_MINUTES` change in
`lib/config.js` as unrelated to the other two edits and called it out
explicitly, even though I hadn't mentioned it in my prediction.
