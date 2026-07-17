# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

`notes-cli` — a tiny command-line notes tool used as the practice repo for the "Git" unit of a Claude Code course. The exercises in `README.md` are run *by* a student using Claude Code inside this repo; the app itself is just a sandbox and is intentionally minimal.

## Commands

- Run the app: `node notes.js add <text>` / `node notes.js list` / `node notes.js delete <id>`
- Run the submission check used by CI: `node scripts/check.js`

There is no build step, package install, test suite, or linter — `package.json` only defines a `start` script (`node notes.js`).

## Architecture

- `notes.js` — CLI entry point; parses `process.argv`, dispatches to `add` / `list` / `delete`.
- `lib/store.js` — persistence layer. Reads/writes notes as JSON to `notes.json` in the repo root (git-ignored, created on first `add`). `load()` returns `{ nextId, notes: [] }` and swallows read errors (missing file) by returning that default shape.
- `lib/config.js` — static app settings (e.g. `SESSION_TIMEOUT_MINUTES`), not currently read from env or files.
- `scripts/check.js` — CI gate run by `.github/workflows/check.yml` on every PR. It only checks that a `notes.md` file exists and is non-empty (part of the course exercise submission, not a code test).

## Course exercise context

`README.md` describes a graded exercise: make some edits, create `notes.md` with a prediction of what changed, ask Claude to summarize the diff and flag unintended changes, append that summary to `notes.md`, commit it on a branch named `read-repo`, push, and open a PR against the upstream (not the fork). If asked to do this exercise, follow the README's steps literally rather than improvising a different workflow — the CI check (`scripts/check.js`) only validates that `notes.md` is present and non-empty, so the actual grading is manual/human review of its content.
