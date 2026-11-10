# Lesson 1 — read-repo

## Prediction (from memory)
I changed the usage message in `notes.js`, pulled the list output into a helper, and maybe touched something in `lib/store.js`.

## Claude's summary of the changes
Changes in the working tree (`git diff`):

1. **`notes.js`: new `formatNote(note)` helper.** It builds the `#<id>  <text>` line that `list` prints. `list` now calls the helper instead of building the string inline. Output is unchanged.
2. **`notes.js`: usage message fixed.** It changed from `Usage: notes add <your note>` to `Usage: node notes.js add <text>`. This matches how the app is actually run.
3. **`lib/store.js`: JSON indent changed from 2 to 4 spaces** in `save()`. This is **unintended**. It isn't part of any feature, and it changes the formatting of `notes.json` on every save with no benefit. It should be reverted.

Flagged: change 3 looks unintended. It sits in a different file from the feature work, has no matching description, and only changes whitespace in the saved file.

## Did it catch the stray change?
Yes. The stray `null, 4` edit in `lib/store.js` is the one I flagged as unintended. Note that I made these edits myself in the same session, so this is a review of my own diff, not an independent check.
