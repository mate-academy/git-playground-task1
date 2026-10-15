# Lesson 1 — let Claude read your repo

## My prediction

I have changed 4 files and I think tha claude will find all my changes.

## Claude's summary

One commit on top of `main`: `c6674bb feat: harden note store, validate delete id, add clear command` (5 files, +34/−7).

| File | Change |
|---|---|
| `lib/store.js` | `load()` returns an empty store only on `ENOENT` and rethrows anything else (e.g. corrupt JSON). `remove()` saves only when a note was actually removed. New `clear()` function. |
| `notes.js` | `delete` validates the id (positive integer). New `clear` command. Help text lists `clear`. |
| `lib/config.js` | `SESSION_TIMEOUT_MINUTES` renamed to `IDLE_LOCK_MINUTES`. Nothing references the old name (checked with `git grep`). |
| `package.json` | `"engines": { "node": ">=22" }`, matching `node-version: 22` in CI. |
| `README.md` | Documents the `clear` command. |

Smoke test in a temp copy passed: `add` / `delete abc` / `delete 1.5` / `delete 9` / `clear` behave as expected, and a corrupt `notes.json` is left untouched.

### Looks unintended

1. **`notes.md` was missing even though the commit message mentions it.** The message says "add notes.md for the Lesson 1 submission", but the file was neither in the commit nor in the working tree. That mismatch would also fail CI: `node scripts/check.js` returned `FAIL  notes.md is missing…` with exit code 1.
2. **One commit does seven things** (bug fix, validation, new feature, rename, engines, docs). The `config.js` rename and the `engines` field are unrelated to hardening the store and make the commit harder to review or revert.
3. **A corrupt `notes.json` ends in a raw stack trace.** The rethrown error is not caught in `notes.js`, so the data stays safe but the user sees a trace from `store.js:15` instead of a readable message.
4. **`clear` does not reset `nextId`.** After `clear` the next note gets #3, not #1. Probably intended (ids are not reused), but worth confirming.
5. **Untracked `.idea/`** is not in `.gitignore`, so it is easy to commit by accident with `git add .`.

## Did it catch the stray change?

TODO: one sentence on whether Claude caught the stray change.
