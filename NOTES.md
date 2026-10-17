### What I have changed
I have added a new function called edit() in store.js that edits a pre-saved note. It takes a note by ID and edits the text.
The edit function is being used inside notes.js and the use is updated in README.md file

### Claude Summary
You have uncommitted changes on main. They add an edit command to the notes tool. Nothing is committed or unpushed.

- lib/store.js: new edit(id, text) function. It finds the note by ID, replaces its text, saves, and returns the note. It's exported alongside all, add and remove.
- notes.js: new edit case, used as edit <id> <text>. It prints a usage message if the ID or text is missing. Otherwise it calls store.edit and prints Edited note #N: .... The default help text now lists edit.
- README.md: adds node notes.js edit <id> <text> to the command list. It uses a - where the other entries use —.
- NOTES.md (untracked): your own write-up of the change. It ends with an empty "Claude Summary" heading.

Bug: store.edit doesn't handle an ID that doesn't exist. find returns undefined, so note.text = text throws a TypeError. delete handles a missing ID cleanly. edit should return null or false in that case, and notes.js should print "No note #N found".

I can fix that, and commit if you want.


### After first commit
I have fixed the edit function by handling non matched ID.