# Commit message from the diff

## What changed (reading the diff)

- **lib/store.js**: `remove()` now only writes to disk when a note is actually deleted (avoids unnecessary saves when the id doesn't exist). A new `find(id)` function was added and exported, returning the matching note or null.
- **lib/config.js**: Added `MAX_NOTES: 50` setting. Removed the two inline comments that were just restating the key names.

## Commit message Claude would write

```
Avoid unnecessary disk writes in remove() and add find() helper

remove() previously called save() unconditionally; now it only writes
when the note was actually found and deleted. Also adds a find(id)
function that returns a note by id or null, and a MAX_NOTES config
value for future enforcement.
```

## Why this is a strong message

- The subject line names the two most important changes and the reason for the main one ("avoid unnecessary disk writes")
- It does not say "updated store.js" or "fixed a bug" — it says *what* changed and *why*
- The body adds the detail that would be lost without it (the conditional save logic)
