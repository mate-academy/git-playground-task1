## Prediction

I think I renamed a variable in notes.js, added a new config option to lib/config.js, and added a helper function to lib/store.js. 

## Claude's summary

Four files changed, none staged yet:

- **notes.js** — In the `add` command, renamed the local variable `text` to `noteText`, and changed the confirmation message from "Added note #..." to "Saved note #...".
- **lib/config.js** — Added a new config option, `MAX_NOTE_LENGTH: 280`, with a comment saying notes longer than this are truncated when listed. (Note: nothing in the code actually uses this yet — it's declared but not enforced.)
- **lib/store.js** — Added a new `count()` helper function that returns the number of stored notes, and exported it alongside the existing `all`, `add`, `remove`.
- **README.md** — Small wording tweak to the "Layout" line: "`lib/config.js` holds app settings" → "`lib/config.js` holds app settings **and defaults**."

**Flagged as possibly unintended:** the README.md edit. It's a one-word, low-visibility wording change in a doc file, unrelated to the functional changes in notes.js/config.js/store.js, and easy to overlook when reviewing a diff focused on the app code. Also worth double-checking: `MAX_NOTE_LENGTH` is added but not wired up anywhere, so it's inert for now unless that's intentional groundwork.

Also present: an untracked `.vscode/` directory (editor settings), not part of this diff — flagging in case you don't want it committed.

**Did it catch the stray change?** Yes — it correctly flagged the README.md wording tweak as the low-visibility change likely to be forgotten, and separately noted the unused MAX_NOTE_LENGTH config as worth a second look.
