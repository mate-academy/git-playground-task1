Prediction: I changed how the notes list is displayed.

Summary: In `notes.js`, I renamed the list variable to `savedNotes` and added `formatNote` to render each listed note without changing the displayed format. In `lib/config.js`, I changed the session timeout from 15 to 20 minutes.

The summary caught the stray session-timeout change in `lib/config.js`.
