I have not done any change

Here's what I see in the working tree right now:

  Tracked files: no changes at all. git diff against HEAD is empty — none of notes.js, lib/store.js, lib/config.js, README.md, package.json, etc. have been touched.

  Untracked files (new, not yet committed):
  - CLAUDE.md — created by me a moment ago via /init, not something you edited.
  - notes.md — exists but is empty (0 bytes).

  Not tracked by git at all (gitignored), but changed locally:
  - notes.json — now contains one note: #1 "My first note". This happened because the app was run (node notes.js add "My first note"), not from a file edit.

  Flagging as unintended / off-script:
  - Per the lesson steps, notes.md should contain your prediction of what you changed — right now it's empty, so that step hasn't actually been done yet.
  - There are no edits across "a couple of files" as the lesson (step 1) asks for — no stray or intentional source changes exist to summarize. It looks like step 1 hasn't been completed yet.

  So: nothing to flag as an unexpected diff, because there's effectively no diff yet — the only real change is the notes.json state from running the CLI, and notes.md is still blank.
