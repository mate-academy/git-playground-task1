## My prediction

I'm about to bump the session timeout value and add a small helper function in `lib/config.js`, and rename a local variable in the `delete` case of `notes.js` — I don't yet know if I'll touch anything else.

## Claude's summary

Three files changed:

1. **`lib/config.js`** — changed `SESSION_TIMEOUT_MINUTES` from `15` to `20`, and added a new exported function `isSessionExpired(minutesSinceActivity)` that returns whether the timeout has elapsed.
2. **`notes.js`** — renamed the local variable `ok` to `deleted` in the `delete` command's switch case (purely cosmetic, no behavior change).
3. **`lib/store.js`** — added a one-line comment above the `FILE` constant explaining that notes are persisted as JSON next to the project root. No logic changed.

**Unintended-looking change flagged:** the `lib/store.js` comment edit is the one most likely to be missed in review — it's in a file that wasn't otherwise touched by the config/rename work, and it's easy to overlook a comment-only diff when skimming a PR. It caught the stray change I predicted I might forget.

## Submission details

- Branch: `read-repo`
- Commit: `811d76d`
- PR: https://github.com/mate-academy/git-playground-task1/pull/274

