# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

A tiny zero-dependency Node.js CLI notes tool, used as a practice repo for a Git course unit (see `README.md` for the lesson task). Edits here are mostly exercises in Git workflow (branches, commits, PRs), not feature work.

## Commands

- `node notes.js add <text>` / `list` / `delete <id>` (also `npm start -- <command>`). `delete` does no argument validation: a missing or non-numeric id becomes `NaN`, prints "No note #NaN found", and still rewrites `notes.json`.
- `node scripts/check.js` — the CI check; passes only if a non-empty `notes.md` exists in the working directory

There is no build, lint, or test setup.

## Architecture

- `notes.js` — entry point; a `switch` over the CLI command that prints results.
- `lib/store.js` — persistence. Reads/writes `notes.json` at the repo root (gitignored); falls back to `{ nextId: 1, notes: [] }` only if the file is missing or not parseable JSON. Valid JSON with the wrong shape (e.g. `{}` or `null`) is not caught and breaks `all()`/`add()`. IDs come from a monotonically increasing `nextId`, so deleted IDs are never reused.
- `lib/config.js` — app settings (currently only `SESSION_TIMEOUT_MINUTES`, shown in the default help output).

## CI / PR workflow

`.github/workflows/check.yml` runs `scripts/check.js` on every pull request. The README's lesson task asks for `notes.md` to be committed on a branch (e.g. `read-repo`) and a PR opened against the upstream `mate-academy` repository rather than the fork. That is a lesson instruction, not something the repo enforces; confirm the PR target with the user.
