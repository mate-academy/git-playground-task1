# Folder contents

- `.git/` — Git repository metadata for this project.
- `.github/` — GitHub configuration; contains the `check.yml` Actions workflow that runs the submission check on pull requests.
- `.gitignore` — Ignores `node_modules/` and the local `notes.json` data file.
- `git-playground-task4/` — A separate nested Git repository/project checked out inside this folder.
- `lib/` — App library code: `config.js` (session timeout setting) and `store.js` (loads/saves notes).
- `notes.js` — CLI entry point implementing `add`, `list`, `delete`, and `search` commands for the notes tool.
- `notes.md` — Notes/predictions log for the Lesson 1 Git exercise.
- `package.json` — npm package manifest for the `notes-cli` tool (name, bin, main entry, scripts).
- `README.md` — Course/lesson instructions describing the notes app and the Lesson 1 Git task.
- `scripts/` — Contains `check.js`, which verifies `notes.md` exists and isn't empty.
