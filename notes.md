### My Changes
I have added a new edit function in store.js that edits a pre-saved note.
This function is being used in notes.js.
How-to use this feature is also added in README.md

### Claude Output
You've added an edit command to the notes tool. All of it is uncommitted.

- lib/store.js: There's a new edit(id, text) function. It finds the note by id and updates its text. It then saves and returns the note, or returns null if the id doesn't exist. It's added to module.exports.
- notes.js: There's a new edit case. It reads the id and the rest of the arguments as the new text. If either is missing, it prints Usage: edit <id> <your note>. Otherwise it calls store.edit and prints either Edited note #<id>: <text> or No note #<id> found. The default help line now lists edit <id> <text>.
- README.md: There's a new usage line for node notes.js edit <id> <text>. It uses a plain - where the other lines use —, which is a small inconsistency.
- NOTES.md (untracked): This is a short write-up of the change, with an empty "Claude Output" section.

I haven't run the code, so I can't say whether it works.