# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A tiny command-line notes tool used as the practice sandbox for the "Unit 4 Git" lesson. The point of the repo is not the app itself but giving learners (and Claude) a safe, low-stakes place to do real Git workflows — commits, branches, and PRs — while working with Claude Code. Expect the working tree to accumulate lesson artifacts (e.g. `notes.md`) and small, deliberate edits made as part of exercises.

## Commands

- Run the CLI: `node notes.js add <text>` / `node notes.js list` / `node notes.js delete <id>`
- Lesson submission check (what CI runs): `node scripts/check.js` — verifies `notes.md` exists and is non-empty at the repo root. It does not judge content; a human reviewer does that.

There is no build step, linter, or test suite in this repo — `package.json` only defines a `start` script (`node notes.js`).

## Architecture

- `notes.js` — CLI entry point. Parses `process.argv`, dispatches to `add` / `list` / `delete`, and prints usage help (including a message driven by `lib/config.js`).
- `lib/store.js` — persistence layer. Reads/writes note data as JSON to `notes.json` at the repo root (git-ignored). `load()` defensively returns an empty store shape (`{ nextId, notes: [] }`) if the file is missing/unparseable, so there's no separate "init" step.
- `lib/config.js` — static app settings (currently just `SESSION_TIMEOUT_MINUTES`, which is display-only in `notes.js` and not enforced anywhere).
- `scripts/check.js` — the automated grading check for the current lesson; invoked by `.github/workflows/check.yml` on every PR against the repo.

## CI

`.github/workflows/check.yml` runs on `pull_request` and executes `node scripts/check.js` on Node 22. Since PRs for this repo are typically opened against the upstream/main repository (not the learner's fork), be mindful of that distinction when asked to open a PR.
