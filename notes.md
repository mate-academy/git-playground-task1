# Lesson 1 — let Claude read the repo

## My prediction (from memory)

I changed the empty-list message and renamed a variable in `notes.js`, and added a small helper function to `lib/store.js`.

## Claude's summary

> Summarize what I've changed, and flag anything that looks unintended.

**3 files changed, 9 insertions, 5 deletions:**

- **`notes.js`**
  - `list`: the empty-list message changed from "No notes yet. Add one with: notes add <text>" to "Your notebook is empty. Add a note with: notes add <text>".
  - `delete`: the local variable `ok` was renamed to `deleted`. Behaviour is unchanged.
- **`lib/store.js`**
  - New `count()` function that returns the number of saved notes; it is added to `module.exports`. Nothing calls it yet.
- **`lib/config.js`**
  - ⚠️ **Looks unintended:** `SESSION_TIMEOUT_MINUTES` changed from `15` to `150`. This is a 10× increase in a security-related setting, the comment above it wasn't touched, and nothing else in the diff relates to it. It looks like a typo (an extra `0`). The new value also shows in the help text: "Session locks after 150 minutes".

Also worth noting: `count()` is dead code for now. It's fine if you plan to use it, but otherwise it isn't needed.

## Did it catch the stray change?

Yes. My prediction left out the `lib/config.js` edit completely, and Claude flagged the timeout change from 15 to 150 minutes as the likely unintended one.
