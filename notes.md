# Notes

## Changes on branch `add-claude-md`

- Added `CLAUDE.md` describing commands, architecture (`notes.js`, `lib/store.js`, `lib/config.js`) and the CI/PR workflow.
- Corrected three inaccuracies in `CLAUDE.md` found in review: `delete` has no argument validation, the `store.js` fallback only covers missing or unparseable files, and the upstream PR target is a lesson instruction rather than something the repo enforces.
- Added `.claude/settings.local.json` to `.gitignore`.
