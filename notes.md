# Notes

## Change Log

- Ran `node notes.js add "This is a simple test note"` to test the notes CLI.
  - This created `notes.json` in the repo root (gitignored, not tracked by git).
  - Verified with `node notes.js list`, which returned:
    - `#1  This is a simple test note`

No tracked files were modified — `git status` shows a clean working tree since `notes.json` is excluded via `.gitignore`.

## Commit

`notes.json` and `notes.md` were force-added (bypassing `.gitignore`'s `notes.json` rule) and committed with the message:

```
Add notes.json and notes.md for notes CLI test
```
