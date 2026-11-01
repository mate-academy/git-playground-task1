# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A tiny zero-dependency Node.js CLI notes tool (`notes.js`), used as a practice repo for a Git course unit. The README contains the lesson task (edit files, write `notes.md`, commit on a branch, open a PR against the main repository, not the fork).

## Commands

- `node notes.js add <text>` / `list` / `delete <id>` (or `npm start -- <command>`)
- No build, lint, or test setup exists.
- `node scripts/check.js` — the CI check; passes only if `notes.md` exists in the cwd and is non-empty.

## Architecture

- `notes.js` — entry point; a `switch` over `process.argv` commands that calls the store.
- `lib/store.js` — persistence. Reads/writes `notes.json` at the repo root as `{ nextId, notes: [{id, text}] }`. Every operation does a full load/save; a missing or corrupt file silently falls back to an empty store. IDs come from `nextId` and are never reused.
- `lib/config.js` — app settings (currently only `SESSION_TIMEOUT_MINUTES`, which is only printed in the help text).
- `.github/workflows/check.yml` runs `scripts/check.js` on every pull request (Node 22). A PR without a non-empty `notes.md` at the repo root fails CI.
