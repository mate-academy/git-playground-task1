Prediction: I renamed the add-command variable in notes.js, tweaked the empty-list message, and added a count() helper in lib/store.js.

### Claude's summary

**Intended changes**
- `notes.js`: renamed `text` → `content` in the `add` command; updated the empty-list message to `No notes yet. Try: notes add <text>`.
- `lib/store.js`: added a short `count()` helper that returns the number of notes, and exported it.

**Possibly unintended**
- `lib/config.js`: `SESSION_TIMEOUT_MINUTES` changed from `15` to `20`. Nothing else in the app was updated to match this, and it wasn't part of the stated edits — looks like a stray change.

Claude caught the stray timeout change in `lib/config.js`.
