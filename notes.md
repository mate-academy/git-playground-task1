# Lesson 1 notes

## My prediction (from memory)

I added a method for updating notes.

## Claude's summary

Changed one file, `lib/store.js`:
- Refactor: added a `FORMAT = "utf8"` constant (no trailing semicolon, unlike the rest of the file) and `load()` now reads the file with `FORMAT`. Behaviour is unchanged.
- New function: `update(id, text)` finds a note by id, changes its `text`, saves, and returns the note, or `null` if the id does not exist. It is added to `module.exports`.
- Worth noting: nothing calls `update` yet, since `notes.js` has no `update` command, and it was not run because `node` was not available in Claude's shell.
- Untracked `.idea/` is not part of the changes.

## Did Claude catch the stray change?

There was no stray change in a second file: I edited only `lib/store.js`, so there was nothing to catch. Claude's summary matches the diff.
