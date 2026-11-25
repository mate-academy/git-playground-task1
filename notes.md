Prediction: I added an edit command.

## Claude's summary

Changes found (4 modified files, 1 new):
- `notes.js`: new `case "edit"` calling `store.edit(text)`.
- `README.md`: documents `node notes.js edit <text>`.
- `package.json`: version bumped 1.0.0 -> 1.1.0.
- `.gitignore`: added `.env` (no trailing newline).
- `notes.md`: new file with the prediction.

Flagged as unintended or broken:
- `lib/store.js` has no `edit` function, so `node notes.js edit ...` would crash.
- The `edit` case is placed after `default` with no `break`, so the default usage output falls through into it.
- `edit` takes only text, no note id, and prints "Added edit", which looks copied from `add`.
- Unrelated stray edits: the `.env` line in `.gitignore` and the version bump.
- `.DS_Store` is untracked and not ignored.

## Did Claude catch the stray change?

Yes. It flagged the `.gitignore` `.env` line and the version bump as unrelated to the edit feature, and it found the bugs in the edit code that I hadn't predicted.
