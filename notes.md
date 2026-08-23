I've added another condole log and a validation for missing file

  1. notes.md (new file) — Created with a one-line prediction of your changes. ✓
  2. notes.js — Added a console.log in the default case: "Description: No Command Found" (before the existing help message). ✓
  3. scripts/check.js — Added a redundant validation check: if (file === null) before the existing fs.existsSync() check.