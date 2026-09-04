# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A Unit 4 "Git playground" practice repo for a Claude Code course. It's a deliberately tiny CLI notes app whose real purpose is to be a safe sandbox for practicing Git workflows (diff summaries, branching, committing, opening PRs) with Claude — not a production tool. Expect lesson tasks to ask you to make small edits, summarize changes, and open PRs against the main (upstream) repo rather than the user's fork.

## Commands

- Run the app: `node notes.js add <text>` | `node notes.js list` | `node notes.js delete <id>`
- Run the submission check locally: `node scripts/check.js`
- No test suite, linter, or build step exists in this repo.

## Architecture

- `notes.js` — CLI entry point; parses `process.argv` and dispatches to `add`/`list`/`delete`.
- `lib/store.js` — persistence layer; reads/writes `notes.json` (gitignored, created at runtime) as `{ nextId, notes: [] }`.
- `lib/config.js` — static app settings (e.g. `SESSION_TIMEOUT_MINUTES`).
- `scripts/check.js` — CI submission check for the current lesson; verifies `notes.md` exists and is non-empty. It intentionally does not judge content — a human reviewer does that.
- `.github/workflows/check.yml` — runs `scripts/check.js` on every pull request via GitHub Actions.

## Lesson workflow notes

- Lesson tasks are described in `README.md` and are the source of truth for what a given session should accomplish (e.g. Lesson 1 asks for a `notes.md` file with a prediction + Claude's change summary, committed on a branch named `read-repo`, pushed, then opened as a PR against the upstream repo).
- The submission check (`scripts/check.js`) only validates that `notes.md` exists and has content — don't over-engineer beyond what a lesson task asks for.
