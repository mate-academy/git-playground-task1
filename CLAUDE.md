# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

`notes-cli` — a tiny command-line notes tool used as the practice repo for the "Unit 4 Git" lesson in a Claude Code course. It's intentionally minimal (no dependencies, no build step, no test suite) so the focus stays on Git workflows (branching, committing, PRs) rather than the app itself. Treat this as a sandbox: the app's functionality is not the point, the lesson tasks are.

## Commands

- Run the CLI: `node notes.js add <text>` / `node notes.js list` / `node notes.js delete <id>`
- Or via npm: `npm start` (equivalent to `node notes.js`, args after `--`)
- Submission check for Lesson 1: `node scripts/check.js` — verifies `notes.md` exists and is non-empty; this is also what CI (`.github/workflows/check.yml`) runs on every PR.

There is no lint, build, or test command — none is configured.

## Architecture

- `notes.js` — CLI entry point; parses `process.argv` and dispatches to `add`/`list`/`delete`.
- `lib/store.js` — persistence layer; reads/writes `notes.json` (gitignored) in the repo root as the on-disk data store. Falls back to `{ nextId: 1, notes: [] }` if the file doesn't exist or is invalid.
- `lib/config.js` — static app settings (currently just `SESSION_TIMEOUT_MINUTES`).
- `scripts/check.js` — the automated grader for the current lesson task; it checks for the presence and non-emptiness of `notes.md`, not its content (a human reviewer judges content).

## Lesson workflow

Each unit's `README.md` describes a task to complete against this repo (e.g., making edits, having Claude summarize changes into `notes.md`, committing on a specific branch name, opening a PR against the main course repo rather than the fork). When asked to carry out "the task," follow the steps in `README.md` exactly, including the required branch name and PR target — CI (`scripts/check.js`) and the lesson grading depend on that structure.
