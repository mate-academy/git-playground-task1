## Claude's Summary

**Changes detected:**

1. **lib/store.js** — Added a new `update(id, text)` function that finds a note by ID and updates its text if found. Exported `update` in module.exports alongside existing exports.

2. **notes.js** — Added a new "edit" command case in the switch statement. It takes an ID and new text as arguments, validates the input, calls `store.update()` to update the note, and outputs success/failure feedback.

**Stray changes:** No unintended changes detected. Both modifications work together coherently to add edit functionality to the notes app.
