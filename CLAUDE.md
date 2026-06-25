# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Run the app
node notes.js add <text>
node notes.js list
node notes.js delete <id>

# Run the CI submission check (verifies notes.md exists and has content)
node scripts/check.js
```

No install step is needed — the project has no dependencies.

## Architecture

`notes.js` is the CLI entry point. It parses `process.argv`, dispatches to one of three commands (`add`, `list`, `delete`), and delegates all persistence to `lib/store.js`.

`lib/store.js` reads and writes a single JSON file (`notes.json`) in the repo root. Each operation does a full read-modify-write cycle; there is no in-memory cache. The file is created on first write if absent.

`lib/config.js` exports a single constant (`SESSION_TIMEOUT_MINUTES`) used only for the help message in `notes.js`.

## CI

The GitHub Actions workflow (`.github/workflows/check.yml`) runs `node scripts/check.js` on every pull request. `scripts/check.js` only checks that `notes.md` exists and is non-empty — it does not validate content. The PR task requires a `notes.md` file to pass CI.
