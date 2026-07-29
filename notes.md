I changed the name of two variables in two different files.

Changes

- notes.md (new, staged) — added a one-line note: "I changed the name of two variables in two different files."
- .idea/ (untracked) — JetBrains IDE project files (workspace.xml), not part of the codebase.
- notes.js — renamed const notes = store.all() to const storage = ...
- scripts/check.js — renamed const file = ... to const files = ...

Unintended breakage

Both renames are half-done — the declaration changed but every other reference in the same block still uses the old name, so both scripts will throw ReferenceError at runtime:

- notes.js:20-25 — notes list will crash on notes.length and for (const note of notes), since notes no longer exists (only storage does).
- scripts/check.js:10,15 — node scripts/check.js will crash on fs.existsSync(file) / fs.readFileSync(file, ...), since file no longer exists (only files does).

This matches notes.md's own description (two variables renamed in two files) but the notes don't mention that the renames are incomplete — as it stands, both notes list and the
check script are broken. You'll want to either revert these two renames or finish them by updating the remaining references.
