I made a small edit to the help text

lib/store.js
- Added a new check() function that just returns the string "check".
- It's never called or exported (not in module.exports), so it's dead code.
- It also uses tab indentation while the rest of the file uses 2-space indent — inconsistent style.

notes.js
- Renamed ok → ok1 in the delete case. This is a no-op rename with no functional purpose — looks like an accidental edit (maybe a leftover from search/replace or a merge artifact) rather than an intentional change.
- Changed the help text from "Commands: add <text> | list | delete <id>" to "Commands are : add <text> | list | delete <id>" — introduces awkward grammar and a stray space before the colon. Looks unintended.
