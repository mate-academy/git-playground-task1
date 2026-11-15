Change the messages in notes.js, add new method countNotes in store.js and change variable

What you changed

- notes.js: reworded the messages. Add now prints Note #N: text was added. Delete now prints Note #N was added.
- lib/store.js: renamed note to allNotes in add(), and added a countNotes(notes) function.
- lib/config.js: renamed SESSION_TIMEOUT_MINUTES to SESSION_TIMEOUT.
- Untracked: notes.md holds your task description ("Change the messages in notes.js, add new method countNotes in store.js and change variable"). .idea/ is IDE config.

Things that look unintended

1. add() is broken. The declaration was renamed to allNotes, but data.notes.push(note) still uses note. That throws a ReferenceError the first time you add a note.
2. The delete message is wrong. It says Note #N was added when a note is deleted. It looks like a copy-paste from the add message.
3. The config rename breaks a reader. notes.js:38 still reads config.SESSION_TIMEOUT_MINUTES, which is now undefined. The output would say "Session locks after undefined minutes".
4. countNotes is not exported. It's defined, but module.exports = { all, add, remove } wasn't updated, so nothing can call it.
5. .idea/ is untracked. Add it to .gitignore rather than committing it. notes.md is probably a scratch file too.

I haven't fixed any of these. Want me to? The fixes would be:
- use note consistently in add()
- change the delete message to "was deleted"
- update notes.js to use the new config key, or revert the rename
- export countNotes
  
he found unintended changes 