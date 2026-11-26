Prediction: changed a message in notes.js, added count() in store.js, SESSION_TIMEOUT_MINUTES changed from 15 to 150.


Summary of changes
- notes.js:22: the message shown when the notes list is empty was reworded to "Your notes list is empty. Add a note with: notes add <text>".
- lib/store.js: a new function count() returns the number of notes and is exported. Nothing calls it yet.
- lib/config.js:4: SESSION_TIMEOUT_MINUTES changed from 15 to 150.

