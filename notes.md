# Lesson 1 notes

## My prediction
Expecting result: adding a timestamp to each new entry. Claude helped me with advising the format and adding the timestamp to the confirmation.

## Claude's summary
Branch `add-note-timestamps`, one commit (`2f0d379`), 2 files changed (14 insertions, 3 deletions):

- `lib/store.js`: `add()` now saves a `createdAt` ISO timestamp (UTC) with each new note.
- `notes.js`: a new `formatTime()` helper turns the stored timestamp into local `YYYY-MM-DD HH:MM`; the `add` confirmation now shows the time; `list` shows `[time]` before the text and leaves it out for older notes without a timestamp; a comment with my expected result was added on line 2, below the shebang.

Flagged as possibly unintended: the line 2 comment reads like a personal task note, not a code explanation; the global git identity was changed; test note #2 is still in `notes.json` (gitignored, not committed).

## Claude's summary of the stray edit
After I planted an unrelated edit, I asked again "Summarize what I've changed, and flag anything that looks unintended." Claude reported one uncommitted change on `read-repo`:

- `lib/config.js`: `SESSION_TIMEOUT_MINUTES` changed from `15` to `30`.

Claude flagged it as unintended because it is unrelated to the rest of the branch, it changes behavior (the help text from `node notes.js` now says "30 minutes"), and the comment above it still reads correctly, so nothing in the file hints that the value was altered.

## Did Claude catch the stray change?
Yes. The first summary had nothing to catch because I had not planted a stray edit yet. Once I added the timeout change in `lib/config.js`, Claude's second summary found it, explained why it looked unintended, and noted the side effect on the help text.
