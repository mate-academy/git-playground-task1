# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A tiny command-line notes tool used as the practice repo for Unit 4 (Git) of the Claude Code course. It's a sandbox for doing real Git work with Claude — the app itself is intentionally minimal.

## Commands

- `node notes.js add <text>` — add a note
- `node notes.js list` — list all notes
- `node notes.js delete <id>` — delete a note
- `node scripts/check.js` — the submission check for the current lesson task; run from the repo root (it checks `process.cwd()`). CI runs this same script on pull requests via `.github/workflows/check.yml`.

There is no build step, linter, or test suite — this is plain Node.js with no dependencies.

## Architecture

- `notes.js` — CLI entry point; parses `process.argv` and dispatches to `add`/`list`/`delete`.
- `lib/store.js` — persistence layer; reads/writes notes to `notes.json` at the repo root (JSON with `{ nextId, notes: [] }`). `notes.json` is gitignored, so a fresh clone starts with no notes.
- `lib/config.js` — app settings (currently just `SESSION_TIMEOUT_MINUTES`, used only for the message printed by the default CLI command).
- `scripts/check.js` — the per-lesson submission checker. Each lesson task has its own check here (currently: confirms `notes.md` exists and is non-empty); it doesn't judge content, only presence — a human reviewer does that.

## Working on lesson tasks

Each lesson in the README describes a task to run with Claude in this repo (e.g. making edits, then asking Claude to summarize the diff into `notes.md`, committing on a specific branch name, and opening a PR against the main course repository — not the user's fork). When asked to do one of these tasks, follow the branch-naming and PR-target instructions in the task literally, since `scripts/check.js` and CI validate the specific artifact each lesson asks for.
