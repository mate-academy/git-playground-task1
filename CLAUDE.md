# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A practice sandbox for the "Unit 4 — Git" lesson of a Claude Code course, not a real product. The notes CLI is intentionally trivial so it's safe to do real Git work in it. The actual exercises live in `README.md` ("Lesson 1 task") and involve driving Git through Claude (make edits, summarize a diff, commit on a branch, open a PR). Read `README.md` before acting — a request here is usually a step in a lesson, not a feature ask.

Lesson steps may ask Claude to commit; the global no-commit rule still applies unless you say otherwise.

## Commands

Pure Node.js, CommonJS, **zero npm dependencies**, no build step, no test framework, no linter.

- `node notes.js add <text>` — add a note (`npm start -- add <text>` also works)
- `node notes.js list` — list notes
- `node notes.js delete <id>` — delete by id
- `node scripts/check.js` — run the same check CI runs on PRs

## Architecture

Three-file app, one direction of dependency:

- `notes.js` — CLI entry point. Parses `argv` into a `command` + `rest`, dispatches in a `switch`. The only place in the app that does console I/O.
- `lib/store.js` — persistence. Owns all reads/writes of `notes.json` (load/save the full `{ nextId, notes }` blob each call). `notes.json` lives at the repo root and is gitignored — it's runtime data, never committed.
- `lib/config.js` — static app settings (e.g. `SESSION_TIMEOUT_MINUTES`).

## CI gate — important

`.github/workflows/check.yml` runs `scripts/check.js` on every pull request. That check does **not** test the app: it only confirms `notes.md` exists and is non-empty. `notes.md` is the lesson submission artifact (the user's prediction + Claude's diff summary), so a green PR means the artifact is present, not that the notes CLI works.
