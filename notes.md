Added new method change in store.js
Call the new function in notes.js

Summary of changes (uncommitted)

- lib/store.js: adds change(id, text), which updates the text of the note with that id. It returns true if it found the note and false if not. It's now exported.
- notes.js: adds a change <id> <new text> command. It validates that text was given, prints "Updated note #N" or "No note #N found", and the help line now lists change.
- scripts/check.js: the PASS message loses one space ("PASS  notes.md" becomes "PASS notes.md").
- lib/notes.md (untracked): two lines of notes about the change work.

Things that look unintended

1. The check.js whitespace change has nothing to do with this feature. It looks accidental. It could also break anything that matches the original output, such as check.yml. I'd revert it unless you meant it.
2. lib/notes.md looks like a scratch file. check.js seems to look for a notes.md, so check whether this is the file it expects and whether it should be committed.
3. Edge case in change: Number(rest[0]) gives NaN for a non-numeric id. That falls through to "No note #NaN found", which is harmless but not very clear. delete behaves the same way.


claude detected the stray chnage!
