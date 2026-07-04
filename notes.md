changed the delete arg to del and added a random comment into a library.

Intended changes:
- Changed the delete command to del in both README.md and notes.js (the command name, help text, and documentation all updated consistently)

⚠️ Unintended / problematic:
- Added a stray comment in lib/store.js (line 14): # I will forget about this
  - Problem: This uses shell-style comment syntax (#) instead of JavaScript comment syntax (//). This will break the code when it runs.
  - Fix: Should be // I will forget about this

Your prediction in notes.md was accurate—you did add the stray library comment as planned. But the syntax is invalid for JavaScript and will cause a runtime error.
