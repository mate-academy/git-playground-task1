What I edited: the function names that get exported in store.js - add to addNote, all to listAll

Claude's sumamry:

What changed
lib/store.js: you renamed three functions:

all() → listAll()
add(text) → addNote(text)
remove(id) → removeNote(id)
In the export line, all and add became listAll and addNote.
notes.js: you updated two call sites to match:

store.add(text) → store.addNote(text) in the add command
store.all() → store.listAll() in the list command
notes.md (new, untracked): a one-line note saying you renamed add → addNote and all → listAll.

Looks unintended
The remove → removeNote rename is only half done, and it breaks the whole app. lib/store.js:39 still exports remove, but no function called remove exists anymore. Because { listAll, addNote, remove } is shorthand for remove: remove, it throws a ReferenceError as soon as lib/store.js is loaded. That means every command fails, not just delete.
The delete command still calls the old name. notes.js:32 calls store.remove(id). Once you fix the export, you'll also need to change this call.
Your notes.md doesn't mention the remove rename. It lists only add and all. That suggests renaming removeNote was the stray edit you forgot.
Fix: either revert line 31 to function remove(id), or finish the rename by exporting removeNote on line 39 and calling store.removeNote(id) on line 32 of notes.js.

Nothing else references the old names. The README only mentions the CLI commands (add, list, delete), and those haven't changed.

My verdict:
Claude has caught the intentional mistake I have left in the files, like I have forgotten to finish renaming the functions.