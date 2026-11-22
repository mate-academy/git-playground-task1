Added separate functions in notes.js to contain dedicated notes operations logic

Claude's summary :

You have three uncommitted changes on main: two edits and one new file.

notes.js: refactor
- The bodies of the add, list and delete cases are now separate functions: addNote(), listNotes() and deleteNote().
- The switch calls those functions.
- Behavior and output messages are identical, so this looks intentional and safe.

notes.md (new, untracked)
- One line saying you split notes.js into dedicated functions.
- It's a change note for the refactor. It's also easy to confuse with notes.json, the app's data file. Decide whether you want it committed.

README.md: two edits
1. add a note became add a note !!!!. This looks unintended, because it's stray text in the docs.
2. In setup step 1, "Make sure you have your own copy…" became "Have your own copy…". This is a harmless wording tweak, but it's unrelated to the refactor.

What to do before committing
- Remove the !!!! from README.md.
- Consider putting the README wording tweak in its own commit, separate from the refactor.
- Decide whether notes.md belongs in the repo.

I can revert the !!!! and split these into separate commits if you want.


Claude detected the stray change