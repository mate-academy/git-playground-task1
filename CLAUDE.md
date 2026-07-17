# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A tiny command-line notes tool (`notes-cli`, Node.js) used as a practice sandbox for the **Unit 4 (Git)** lesson of the Claude Code course. The app is intentionally small so the focus is on real Git operations with Claude, not on the app itself.

## Commands

Run from the repo root:

- `node notes.js add <text>` — add a note
- `node notes.js list` — list all notes
- `node notes.js delete <id>` — delete a note
- `npm start` — same as `node notes.js` (delegates to the entry point)
- `node scripts/check.js` — Lesson 1 CI check (verifies `notes.md` exists and is non-empty)

There is no test suite, no linter, and no build step — it's plain Node with no dependencies.

## Code architecture

Single-process Node CLI, no frameworks:

- `notes.js` — entry point. Parses `process.argv` into a subcommand (`add` | `list` | `delete` | default help) and dispatches to `lib/store.js`. Registered as the `notes` bin in `package.json`.
- `lib/store.js` — persistence layer. Reads/writes `notes.json` in the repo root as `{ nextId, notes: [] }`. Exposes `all()`, `add(text)`, `remove(id)`. **There is no in-memory cache** — every operation re-reads the file, so concurrent writes are unsafe. `notes.json` is git-ignored.
- `lib/config.js` — single constant `SESSION_TIMEOUT_MINUTES = 15`. Currently only used in the help text, not enforced anywhere.
- `scripts/check.js` — CI script (not part of the app) that the Lesson 1 GitHub Action runs on PRs to confirm the student added a `notes.md` file with content.
- `.github/workflows/check.yml` — runs `node scripts/check.js` on every `pull_request` against any branch.

## Lesson 1 task (the reason this repo exists)

The README defines a specific workflow students run with Claude:

1. Make a few small edits across files (include at least one "stray" change you might forget).
2. Create `notes.md` with a one-line prediction of what you changed.
3. Ask Claude to summarize your changes and flag anything unintended; paste its summary into `notes.md` under your prediction and note whether it caught the stray change.
4. Have Claude commit `notes.md` on a new branch called `read-repo` and push it.
5. Open a PR against the **main repository, not the fork**, and submit the link.

The CI check is what gates submission — `notes.md` must exist and be non-empty.

## Conventions worth knowing

- No external dependencies; stay dependency-free unless the lesson says otherwise.
- `notes.json` is git-ignored — never commit it.
- The branch name for the Lesson 1 PR is fixed: `read-repo`.
- PRs go to the main repo, not the student's fork.
