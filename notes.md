# Git Changes Review — Lesson 1

## My Prediction

I changed the empty notes message in `notes.js` to make it more user-friendly.

## Claude's Summary

Claude reviewed the Git changes and identified:

1. **notes.js:** Updated the message displayed when the notes list is empty.
2. **lib/config.js:** Changed `SESSION_TIMEOUT_MINUTES` from 15 to 5.
3. **notes.md:** Added a new file documenting my prediction and the review.

Claude also flagged several potential issues:

- The session timeout change appeared unintended because it was missing from my prediction.
- The modified lines had inconsistent indentation.
- The new empty-list message no longer showed the user the command for adding a note.

## Did Claude Catch the Stray Change?

Yes. Claude successfully detected the unintended change in `lib/config.js`, where the session timeout was reduced from 15 minutes to 5 minutes. I had not included this change in my prediction.

## Reflection

Claude identified changes I had overlooked and explained their potential impact. This demonstrates how reviewing Git changes with Claude can help detect unintended modifications before committing code.