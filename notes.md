I added an update function to `store.js`, an update case to `notes.js`, a description of the update function in `README.md`, and updated the version for a minor version bump in `package.json`.

You've added an update feature to the notes app:
- lib/store.js: New update(id, newText) function that finds and modifies a note
- notes.js: New "update" command handler with usage guidance
- README.md: Documented the new command
- package.json: Bumped version 1.0.0 → 1.1.0 (appropriate for a minor feature)
- .gitignore: Added secrets.json (good preventive practice)

⚠️ Flag — unintended files:

- .DS_Store (untracked) — This is a macOS system file that shouldn't be in version control. Add it to .gitignore:
echo ".DS_Store" >> .gitignore

Claude did catch my stray change, which was the inclusion of "secrets.json" in `.gitignore`.