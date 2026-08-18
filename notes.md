# Lesson 1 — read-repo exercise

**Note:** this run was simulated by Claude (edits, prediction, and summary all
done by the assistant) rather than a real human memory test — see chat for context.

## Prediction (from memory)
I added a `count` command to the notes CLI (new function in `lib/store.js`,
new case in `notes.js`) and renamed the `id` variable in the delete handler
to `noteId`.

## Claude's summary
Changes across 3 files:
- `lib/store.js`: added a new `count()` function that returns the number of
  stored notes, and exported it.
- `notes.js`: added a `count` command that prints the note count via
  `store.count()`, updated the default help text to mention it, and renamed
  the local variable `id` to `noteId` in the `delete` case.
- `package.json`: **stray edit** — reworded the `description` field from
  "A tiny command-line notes tool…" to "A tiny CLI notes tool…". Unrelated to
  the CLI feature work above and easy to miss in a review.

Did it catch the stray change? Yes — the `package.json` description tweak
was flagged as unrelated to the main `count`/rename work in the other files.
