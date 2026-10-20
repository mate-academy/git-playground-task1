Prediction: I renamed a variable in lib/store.js, added a small helper function, and changed a message in notes.js.

## Claude's summary of the changes

Three tracked files changed:

- `lib/store.js`
  - Renamed the constant `FILE` to `NOTES_FILE` and updated both uses (`load` and `save`).
  - Added a new `count()` helper that returns the number of notes, and exported it. Nothing calls it yet.
- `notes.js`: the empty-list message changed from "No notes yet. Add one with: notes add <text>" to "Nothing here yet. Add a note with: notes add <text>".
- `lib/config.js`: `SESSION_TIMEOUT_MINUTES` changed from 15 to 30.

Flagged as possibly unintended:

- The `SESSION_TIMEOUT_MINUTES` change in `lib/config.js` is a behavior-looking setting change unrelated to the other edits. It only affects the help text today, but it is the most likely stray edit.
- `count()` is exported but unused, so it is dead code for now.

## Did it catch the stray change?

Yes. The prediction covered the rename, the helper function and the message change, but missed the `lib/config.js` timeout change. The summary caught it and flagged it as the likely unintended edit.
