# Lesson 1 — let Claude read your repo

## My prediction (from memory, before asking Claude)

I added a `count()` helper to `lib/store.js`, renamed a variable inside `remove()`, and made `notes.js list` print a total at the end.

## Claude's summary

**Three files changed, all uncommitted in the working tree.**

`lib/store.js`
- Renamed the local `before` to `countBefore` in `remove()` (both the declaration and the comparison were updated, so behaviour is unchanged).
- Added a new `count()` function that returns `load().notes.length`.
- Exported it: `module.exports = { all, add, count, remove }`.

`notes.js`
- The `list` command now prints a trailing `(N notes total.)` line via `store.count()`.
- The default/usage line changed from `add <text> | list | delete <id>` to `add <text> | list | delete <id> | help`.

`lib/config.js`
- `SESSION_TIMEOUT_MINUTES` changed from `15` to `30`.

**Flagged as possibly unintended:**

1. **The `lib/config.js` change is the odd one out.** Doubling the session timeout has nothing to do with adding a note count. It's a one-line edit in a file the rest of the change never touches, and it silently alters the user-visible line printed by the default command. This looks like a stray edit, not part of the feature.
2. **`help` is advertised but not implemented.** The usage string now lists `help` as a command, but `main()`'s `switch` has no `case "help"`. It happens to work — `help` falls through to `default`, which prints the usage line — but that's incidental, not intended, and any future `default` change breaks it.
3. **`store.count()` re-reads the file the `list` command just read.** `store.all()` already called `load()`; `count()` calls `load()` again, so listing notes now hits the disk twice. `notes.length` from the array already in hand would do the same job.

## Did it catch the stray change?

Yes — my prediction never mentioned `lib/config.js`, and the `SESSION_TIMEOUT_MINUTES: 15 → 30` edit was exactly the change I'd forgotten. It also caught two things I hadn't thought about at all: the `help` command that's advertised but never implemented, and the duplicate file read introduced by calling `store.count()` right after `store.all()`.
