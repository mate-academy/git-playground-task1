### My Changes
I have added a new function called edit() in store.js that allows to edit a pre-stored note.
This function is used in notes.js, the same has been reflected in README.md

### Claude Outcome
You added an edit command to the notes tool, in three modified files plus one new notes file.

- lib/store.js: There's a new edit(id, text) function. It loads the data and finds the note by id. If the note doesn't exist it returns null. Otherwise it updates the text, saves, and returns the note. It is now exported alongside all, add and remove.
- notes.js: There's a new edit case in the command switch.
  - It parses the id and nts into the text.
 store.edit and prints either Edited note #N: … or No note #N found.
  - The default help message now lists edit <id> <text>.
- README.md: There's a new line documenting node notes.js edit <id> <text>. It uses a plain - where the other lines use —.
- notes.md (untracked): This is your write-up of the change. Its "Claude Outcome" section is sti

I haven't run the code or the tests, so the new command is untested.