# Lesson 1 notes

## My prediction
Expecting result: adding a timestamp to each new entry. Claude helped me with advising the format and adding the timestamp to the confirmation.

## Claude's summary
Branch `add-note-timestamps`, one commit (`2f0d379`), 2 files changed (14 insertions, 3 deletions):

- `lib/store.js`: `add()` now saves a `createdAt` ISO timestamp (UTC) with each new note.
- `notes.js`: a new `formatTime()` helper turns the stored timestamp into local `YYYY-MM-DD HH:MM`; the `add` confirmation now shows the time; `list` shows `[time]` before the text and leaves it out for older notes without a timestamp; a comment with my expected result was added on line 2, below the shebang.

Flagged as possibly unintended: the line 2 comment reads like a personal task note, not a code explanation; the global git identity was changed; test note #2 is still in `notes.json` (gitignored, not committed).

## Did Claude catch the stray change?
I did not plant a deliberate stray edit, so there was nothing hidden to catch. Claude's summary matched the diff and flagged only the items above.
