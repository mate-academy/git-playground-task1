I've created a function to sum two numbers

## Claude's summary

**What changed (uncommitted, on `main`):**
- `scripts/check.js`: added a new function `sum(a, b)` that returns `a + b`, placed at the end of the file after the final `console.log`.
- `notes.md`: new, untracked file (this file).

**Flags — things that look unintended:**
1. **Wrong file.** `scripts/check.js` is the CI check script (run by `.github/workflows/check.yml` on every PR). It only verifies that `notes.md` exists and isn't empty. A general-purpose `sum` helper doesn't belong there, and editing the grader script is probably not what the task wanted.
2. **Dead code.** `sum` is never called or exported, so it has no effect at all.
3. **Style mismatch.** The rest of the file uses semicolons and spaces around operators; `sum` has `a+b` with no spaces and no semicolon.
4. **No newline at end of file** in `scripts/check.js`.
5. **Working on `main`.** Changes are made directly on the default branch; the workflow runs on `pull_request`, so these should go on a separate branch and be opened as a PR.
