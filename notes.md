i have added new file from the task

## Summary of changes

- `notes.js` (modified): added `console.log("hi there its a string");` just above the `main();` call.
- `notes.md` (new): created with the line "i have added new file from the task", now also holding this summary.

## Flagged as possibly unintended

- The new `console.log` in `notes.js` runs on every invocation, before any command output, so it adds a stray line to `add`, `list`, and `delete`. Its position was a guess, so it is probably not what was wanted.
- `notes.json` was modified at 12:07, before the other edits, but it is listed in `.gitignore`, so git does not track it and it does not appear in the diff.

## Did it catch the stray change?

Yes. The stray change is the `console.log` line in `notes.js`, which git diff shows as the only tracked modification and which prints extra output on every run.
