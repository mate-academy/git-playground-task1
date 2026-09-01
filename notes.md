## Claude's summary of changes

**README.md**
- Added "(requires Node.js)" to the intro sentence describing the notes tool.

**notes.js**
- Added a trailing period to the `add` command's usage message: `"Usage: notes add <your note>"` → `"Usage: notes add <your note>."`

**Result:** Nothing unintended. Both edits are cosmetic/text-only, scoped to exactly the file requested each time, and no other files (`lib/store.js`, `lib/config.js`, `scripts/check.js`, `package.json`) show any diff.
