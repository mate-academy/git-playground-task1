# Branch review — `main`

_Reviewed 2026-09-15 at commit `cf8666d`._

## Branch state

`main` is the only branch — clean working tree, in sync with `origin/main`, no local or
remote feature branches. The 10 commits are all single-file web-UI style commits
("Create check.js", "Update README.md"), so there's nothing branch-specific to diff.
Notably, the `read-repo` branch that the Lesson 1 task in `README.md:23` asks for doesn't
exist yet, so that task hasn't been started.

Since there's no diff to review, what follows is a review of the code on the branch.

## Findings

### 1. Silent data loss on a corrupt notes file — `lib/store.js:6-16`

`load()` catches everything and returns an empty store. If `notes.json` is malformed or
temporarily unreadable (permissions, partial write), the next `add` or `remove` calls
`save()` and overwrites every existing note with the empty state. The recovery path
destroys the data it was meant to survive.

**Fix:** distinguish `ENOENT` (legitimately empty — return the default) from a parse or
read failure (bail out loudly rather than silently resetting).

### 2. `delete` with no id rewrites the file for nothing — `notes.js:31`, `lib/store.js:31-37`

`Number(rest[0])` is `NaN` when the argument is missing, `NaN !== n.id` is always true, so
nothing is filtered — but `save(data)` still runs, and the user sees `No note #NaN found`.

**Fix:** validate the id in `notes.js` (as `add` already validates its text), and make
`remove` only `save()` when something actually changed.

### 3. The help text makes a claim the app doesn't implement — `notes.js:38`, `lib/config.js:4`

`SESSION_TIMEOUT_MINUTES` is referenced in exactly one place: a line printed to the user
promising "Session locks after 15 minutes of inactivity." There is no session, no timer,
and no locking anywhere in the repo. Either the feature is missing or the message is —
right now it tells users something untrue.

### 4. CI fails on every PR by design — `.github/workflows/check.yml:14`, `scripts/check.js:8`

The workflow runs `scripts/check.js`, which requires a `notes.md` that isn't tracked in the
repo. That's intentional for the lesson (the learner adds it), but worth knowing: a red
check on a fresh PR is expected, not a break.

### 5. Minor

- `package.json` declares no `test` script even though CI has a check command.
- `"bin": { "notes": "notes.js" }` is correct and the shebang is in place — that part's fine.

## Verdict

Nothing here is urgent for a teaching sandbox. #1 is the only genuine bug; #3 is the kind of
stray inconsistency the lesson is actually about spotting.
