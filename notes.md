I made a small edit to the help text

Claude's summary: Two files were modified. In `notes.js`, the default help text changed from "Commands: add <text> | list | delete <id>" to "Commands to run : add <text> | list | delete <id>", and a local variable in the `delete` case was renamed from `ok` to `ok1` (a no-op rename, same behavior). In `lib/store.js`, an unused `check()` function was added that returns the string "check" — it's never called and isn't exported, so it's dead code. Flagged as likely unintended: the `check()` function in `lib/store.js` and the `ok` -> `ok1` rename in `notes.js`.

Did it catch the stray change? Yes — my prediction only mentioned the help text edit, but Claude also caught the unused `check()` function and the pointless variable rename, which I hadn't noticed.
