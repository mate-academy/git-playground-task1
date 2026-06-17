# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A tiny CLI notes tool used as a Git practice sandbox for a Claude Code course. The primary goal of work here is practicing Git operations (branches, commits, PRs), not building features.

## Running the app

```bash
node notes.js add <text>   # add a note
node notes.js list          # list all notes
node notes.js delete <id>   # delete a note by id
```

No install step needed — no dependencies.

## Architecture

- `notes.js` — entry point; parses `process.argv` and dispatches to store methods
- `lib/store.js` — reads/writes `notes.json` in the repo root; every call does a full load+save cycle (no in-memory cache)
- `lib/config.js` — single exported object with app constants (`SESSION_TIMEOUT_MINUTES`)
- `notes.json` — generated at runtime; not committed; holds `{ nextId, notes[] }`

## CI

`.github/workflows/check.yml` runs on every PR. It executes `node scripts/check.js`, which checks that `notes.md` exists and is non-empty. A PR will fail CI if `notes.md` is missing or blank.

## No test suite or linter

There is no configured test runner or linter. State that explicitly rather than claiming a clean bill of health after changes.
