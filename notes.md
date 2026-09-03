# Lesson 1 — let Claude read your repo

## My prediction (from memory)
I extracted the note-formatting into a `formatNote` helper in `notes.js` and renamed the `id` parameter to `noteId` in `lib/store.js`'s `remove` function for clarity.

## Claude's summary
Three files changed, no behavior change to the CLI's output:

- **notes.js** — added a new `formatNote(note)` helper function and swapped the inline template-literal in the `list` case to call it instead.
- **lib/store.js** — renamed the `remove(id)` parameter to `remove(noteId)` (pure rename, same logic).
- **lib/config.js** — changed `SESSION_TIMEOUT_MINUTES` from `15` to `20`. This wasn't mentioned in the prediction and isn't related to the other two edits — it looks like a stray/unintended change slipped into a second file.

Nothing else was touched; `notes.json`, `package.json`, and the workflow files are unchanged.

## Did it catch the stray change?
Yes — the `SESSION_TIMEOUT_MINUTES` bump in `lib/config.js` was exactly the change I'd have forgotten to mention, and Claude flagged it as unrelated to the other two edits without being told about it in advance.
