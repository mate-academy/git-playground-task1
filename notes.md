## Summary of changes

Only `notes.js` was modified (working tree is otherwise clean — no stray edits in other files).

- Replaced the single `switch` statement in `main()` with three named handler functions (`addNote`, `listNotes`, `deleteNote`) plus a `printHelp` fallback, dispatched through a `commands` lookup object instead of inline `case` blocks.
- `command`/`rest` are no longer parsed at module load time; they're now read inside `main()` as `command`/`args`.
- Behavior-changing fix: `deleteNote` now checks `Number.isInteger(id)` before calling `store.remove(id)`. Previously, a non-numeric id (e.g. `notes delete abc`) became `NaN`, which always fell through to "No note #NaN found" with no hint that the input itself was invalid. It now prints "Usage: notes delete <id>" instead.

## Anything unintended?

No unintended or stray changes — `git diff` shows edits confined to `notes.js`, and the restructuring preserves the original output strings for `add`, `list`, and valid/invalid `delete` cases (verified by running all commands manually).
