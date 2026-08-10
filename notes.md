I changed a variable name in notes.js, adjusted one config value, and added a small helper/comment.

Summary: In notes.js, the `ok` variable in the delete case was renamed to `wasDeleted`, and a new `formatNote(note)` helper (with a one-line comment) was added and used in the list case. In lib/config.js, the header comment was changed from "App configuration." to "Application configuration." No behavior changed.

Claude caught the extra change in lib/config.js that I could have easily forgotten.
