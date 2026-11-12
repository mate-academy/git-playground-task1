# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

No dependencies, no build step, no lint, and no test suite. Node 22 is what CI uses (`.github/workflows/check.yml`).

- Run the app: `node notes.js <add <text> | list | delete <id>>` (or `npm start`, which runs `node notes.js` with no args and prints usage)
- Run the Lesson 1 submission check locally: `node scripts/check.js` (run from the repo root; it checks that `notes.md` exists and is non-empty)

## Architecture

- `notes.js` is the CLI entry point. It parses `process.argv`, dispatches on the subcommand (`add`, `list`, `delete`), and prints output. It has no logic beyond argument handling and formatting.
- `lib/store.js` is the only code that touches data. It reads and writes `notes.json` at the repo root (path resolved relative to `lib/`, not the cwd). The file is a JSON object `{ nextId, notes: [{ id, text }] }`. Every operation does a full load-then-save; there is no caching or locking. A missing or unparseable file is silently treated as empty.
- `lib/config.js` holds app settings as a plain exported object.
- `scripts/check.js` is separate from the app. It is the Lesson 1 grader used by CI on pull requests. It only checks that `notes.md` exists and has content; it does not judge the content.

## Gotchas

- `lib/config.js` defines `SESSION_TIMEOUT_UNUSED`, and the usage message in `notes.js` mentions that the session locks after that many minutes. No code implements locking or reads the timeout, so that message describes behavior that does not exist.
- `delete` converts its argument with `Number(...)`. A non-numeric id becomes `NaN` and prints "No note #NaN found" rather than a usage error.
- `notes.json` is gitignored and is created on first `add`. Don't commit it.
- Modules use CommonJS (`require` / `module.exports`), not ES modules.
