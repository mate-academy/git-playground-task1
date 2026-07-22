# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

This is the practice/sandbox repo for Unit 4 (Git) of a Claude Code course. It's a real but tiny CLI app used as a safe playground for doing actual Git work with Claude — branches, commits, PRs — not a production project. Lesson instructions and the current task live in `README.md`; read it before assuming what "the task" is, since it changes per lesson.

## The app

A command-line notes tool with no dependencies (no `node_modules`, no build step):

- `node notes.js add <text>` — add a note
- `node notes.js list` — list all notes
- `node notes.js delete <id>` — delete a note

Architecture: `notes.js` is the CLI entry point (arg parsing + command dispatch), `lib/store.js` is the persistence layer (reads/writes `notes.json` at the repo root, which is gitignored), and `lib/config.js` holds app settings (e.g. session timeout).

## Commands

- Run the app: `node notes.js <add|list|delete> ...`
- Run the submission check locally: `node scripts/check.js` (same check CI runs on PRs — see `.github/workflows/check.yml`)
- There is no build, lint, or test suite configured (`package.json` only defines a `start` script).

## Working in this repo

- Lesson tasks typically ask you to make edits, then have Claude summarize/commit/push/open a PR — follow the specific instructions in `README.md` for the current lesson rather than assuming a generic workflow.
- `scripts/check.js` is a submission gate for the current lesson (currently: verifies `notes.md` exists and is non-empty). It intentionally does not judge content — a human reviewer does. Don't add logic to it beyond what a lesson explicitly asks for.
- PRs from this repo are opened against the main course repository, not the user's fork — confirm the PR base/remote before creating one.
