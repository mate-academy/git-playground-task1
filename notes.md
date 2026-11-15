Prediction: smaller refactoring

## Claude's summary

- **`notes.js`:** In the `delete` command, the variable `ok` was renamed to `removed`. Both places that use it were updated, so the behaviour is the same.
- **`notes.js`:** The help text changed from `Commands: add <text> | list | delete <id>` to `Usage: notes <add <text> | list | delete <id>>`. This is only a wording change.
- **`lib/store.js`:** There's a new `count()` function that returns how many notes are saved. It's exported, but nothing calls it yet.
- **`lib/config.js`:** `SESSION_TIMEOUT_MINUTES` changed from `15` to `150`.

### Possibly unintended
- ⚠️ **The timeout change in `lib/config.js`** is the most likely accident. Going from 15 to 150 looks like an extra zero, and it's a separate file from all the other edits. It also changes real behaviour: the session would stay unlocked for 2.5 hours instead of 15 minutes. The help text now prints *"Session locks after 150 minutes."*
- Minor: `count()` isn't used anywhere yet. That's fine if you're adding it for later.
- Minor: the new usage text nests angle brackets (`<add <text> | …>`), which is a bit hard to read.

## Did it catch the stray change?

Yes. Claude flagged the `SESSION_TIMEOUT_MINUTES` change from 15 to 150 in `lib/config.js` as likely unintended, which was the stray edit my "smaller refactoring" prediction missed.
