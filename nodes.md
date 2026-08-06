Added reset function to store

What changed

3 files touched, all related to a new reset command:

1. lib/store.js — added reset(), which does fs.writeFileSync(FILE, "{}") and is now exported alongside all, add, remove.
2. notes.js — added a case "reset": branch that calls store.reset() and logs "Reset store".
3. nodes.md (new, untracked) — one line: Added reset function to store.

Flags — likely unintended

- reset() writes a shape the rest of the module doesn't understand. load()/add()/all() all expect { nextId, notes: [] }, but reset() writes "{}". Since "{}" parses fine, load()'s catch-block fallback ({ nextId: 1, notes: [] }) never kicks in. The very next list or add after a reset will throw (notes is undefined) instead of giving you a clean, empty store. This is almost certainly a bug — it should write JSON.stringify({ nextId: 1, notes: [] }) (or just call save({ nextId: 1, notes: [] })).
- store.reset() returns nothing, but notes.js does const ok = store.reset() and never uses ok — dead variable, and unlike add/delete there's no success/failure branch. Looks like a half-finished copy-paste from the delete case.
- Help text wasn't updated. The default case still prints "Commands: add <text> | list | delete <id>" — reset is undiscoverable.
- Style inconsistency: function reset(){ / case "reset":{ use no space before (/{ and 3-space indent inside reset(), unlike the 2-space style used everywhere else in the file — minor, but suggests this wasn't run through the same formatting as the rest.
- nodes.md appears to be a stray note-to-self (commit-message draft?) accidentally left in the working directory rather than added to .gitignore or discarded — and its name (nodes.md) is suspiciously close to notes.js, which makes me suspect a typo rather than an intentional file. Worth confirming before it gets committed.

Bottom line: the intent (add a reset command) is clear and small, but the implementation has a real correctness bug (corrupts store shape on reset) plus a leftover scratch file that probably shouldn't be checked in.
