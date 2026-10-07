I added a few bad comments using # instead of //

Summary

Modified: notes.js
Untracked: notes.md (new file)

Changes to notes.js:

Intentional changes (probably):
- Renamed variable store → storing throughout the file

Issues that look unintended:

1. Module name mismatch — Changed require("./lib/store") to require("./lib/storing"), but only store.js exists in lib/. This will cause a runtime error.
2. Syntax error — Line with # What is this? is invalid JavaScript (# is not valid outside of comments or template literals).
3. Nonsensical case — Added case false: block in what appears to be a string-based switch statement. This will never match.
4. Dead code — Added a random() function that just returns 5 with no usage.
5. Unclear comments — // what does this do here? and // TODO: Break here? suggest uncertainty.

These look like debugging artifacts or accidental edits rather than intentional changes. The require rename is particularly problematic since it breaks the app. Should I clean these up?


Yes it did catch the stray changes.
