Prediction: the diff hardens note storage (no overwrite of a corrupt notes.json, temp-file saves), validates the delete id, renames store.all() to store.list(), and adds a help command that flags unknown commands.


Your prediction in `notes.md` matches the diff. Every change it lists is there.

## What changed

**[lib/store.js](lib/store.js)**: making storage safer
- `load()` now starts with an empty notes list only when `notes.json` doesn't exist. If the file exists but is corrupt, it now throws an error. Before, it quietly started empty and the next save wiped your notes.
- `save()` now writes to `notes.json.tmp` first and then renames it over `notes.json`. A crash in the middle of a write can no longer leave a half-written file.
- `all()` is renamed to `list()`, and the export changed to match.
- `remove()` now saves only when a note was actually deleted.

**[notes.js](notes.js)**: the command-line tool
- `list` now calls `store.list()`.
- `delete` rejects an id that isn't a positive whole number and prints a usage message.
- The fallback case now prints `Unknown command: X` for unrecognised commands, and `help` shows in the command list.

**[.gitignore](.gitignore)**: adds `notes.json.tmp`, the temp file the new `save()` creates. That fits the store change.

**notes.md** (new file): your prediction. The lesson's CI check (`scripts/check.js`) needs this file to exist and not be empty, so it's intended.

## Looks unintended

1. **Stray blank lines in [notes.js:19-22](notes.js#L19-L22).** Four empty lines were added between the `add` and `list` cases, and one of them has trailing spaces. It's probably an editing leftover, so delete them.
2. **`package-lock.json` (untracked).** This was probably created by running `npm install`. The project has no dependencies, so the file lists only the package itself. Either commit it on purpose or delete it. Don't sweep it in with `git add .` without deciding.

## Checked and fine
- The rename from `all()` to `list()` breaks nothing. `notes.js` was the only caller, and it's updated.
- One small gap: if the temp-file write fails partway, a stray `notes.json.tmp` stays on disk. `notes.json` itself is safe, and the file is gitignored, so this isn't worth fixing.

I can remove the blank lines or add this summary to `notes.md` next to your prediction.


Claude caught stray blank lines