1. renamed note to createdNote
2. changed SESSION_TIMEOUT_MINUTES to 20
3. adde count funtion

## Claude's summary

- `notes.js`: renamed the local variable `note` to `createdNote` in the `add` case, and changed the "no notes" usage message from `notes add <text>` to `node notes.js add <text>`.
- `lib/store.js`: added a new `count()` function (returns `all().length`) and exported it alongside `all`, `add`, `remove`.
- `lib/config.js`: changed `SESSION_TIMEOUT_MINUTES` from 15 to 20.

Nothing here looks unintended on its own - all three files are small, self-consistent edits. The one thing worth flagging: the `notes.js` usage-message wording change wasn't mentioned in the prediction above, so it looks like the stray edit the task warned about.