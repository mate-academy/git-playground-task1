# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A tiny CLI notes tool used as a Git practice sandbox for a Claude Code course (Unit 4). Students make edits, then work with Claude to commit, branch, and open PRs as part of guided lessons.

## Running the app

```bash
node notes.js add <text>   # add a note
node notes.js list          # list all notes
node notes.js delete <id>  # delete a note
```

No `npm install` needed — zero dependencies.

## CI check

The GitHub Actions workflow (`.github/workflows/check.yml`) runs on every PR and executes:

```bash
node scripts/check.js
```

This checks that `notes.md` exists and is non-empty. It does **not** lint or run unit tests — there are none.

## Architecture

- `notes.js` — CLI entry point; parses `process.argv` and dispatches to store
- `lib/store.js` — reads/writes `notes.json` (auto-created on first write); holds `nextId` counter and `notes` array
- `lib/config.js` — single config object (`SESSION_TIMEOUT_MINUTES`)
- `scripts/check.js` — CI-only script; checks for `notes.md` presence and content
- `notes.json` — runtime data file; not committed; created at first `add`

Data persists in `notes.json` at the repo root. IDs are monotonically incrementing integers; deleted IDs are never reused.

## Lesson 1 task context

Students are expected to:
1. Make a few edits across files, then create `notes.md` with their own change prediction
2. Ask Claude to summarize the diff and flag unintended changes
3. Paste Claude's summary into `notes.md`
4. Have Claude commit `notes.md` on a branch called `read-repo`, push it, and open a PR against the upstream main (not the fork)
