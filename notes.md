# Lesson 1: let Claude read my repo

## My prediction (from memory)

I changed a message, renamed a variable, added a function, and made one small extra edit.

## Claude's summary

Four files are modified and nothing is staged. All the app commands still work, and the new `count()` returns the right number.

**notes.js**
- When you add a note, the confirmation message now says "Saved note #…" instead of "Added note #…".
- ⚠️ You added a blank line between that message and `break;`. It does nothing and looks unintended.

**lib/store.js**
- You renamed `before` to `countBefore` in `remove()`, in both places it's used.
- You added a new function, `count()`, with the comment `//retrieve number of notes`. It returns how many notes exist and is exported.
- ⚠️ Nothing calls `count()` yet, so it's unused for now.

**lib/config.js**
- ⚠️ This looks unintended. It's a lone comment edit in a file unrelated to the other changes: "The session **locks** after…" became "The session **ends** after…".
- It now contradicts the help text in notes.js, which still prints "Session locks after 15 minutes of inactivity."
- The value itself is still `15`.

**How the prediction compares:** all four predicted changes are there. The extra blank line in notes.js wasn't in the prediction.

## Did Claude catch the stray change?

Yes. My deliberate stray edit was the comment change in `lib/config.js` ("locks" → "ends"). Claude flagged it as unintended and pointed out that it now contradicts the help text in `notes.js`. It also flagged a blank line in `notes.js` that I hadn't meant to add.

## Branch, commit and PR

- Committed on the branch `read-repo` and pushed to my fork, then merged into my fork's `main`, which PR #508 is opened from.
- PR against the main repository: https://github.com/mate-academy/git-playground-task1/pull/508
