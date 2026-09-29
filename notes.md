# Lesson 1 – Let Claude read your repo

## My prediction
I changed the usage message printed by `node notes.js add` in `notes.js` so it shows the real command.

## Claude's summary
One file changed: `notes.js` (1 line, line 12, inside the `add` case).

- Before: `console.log("Usage: notes add <your note>");`
- After: `console.log("Usage: node notes.js add <your note>");`

Only the text printed when `add` is run without a note changed. No logic changed, and `list` and `delete` are unaffected. Nothing else looked unintended.

## Did it catch the stray change?
There was no stray edit in a second file this time: the only change was the one in `notes.js`, and the summary matched my prediction exactly.
