I have created new .md file for some notes about this project

I add in file store.js new function change_something like a 
template for some new changes

## Claude's summary

- notes.md (new) — prediction/notes file required by scripts/check.js.
- lib/config.js — added a single blank line after the header comment. Cosmetic, no functional change.
- scripts/check.js — added two blank lines mid-file. Cosmetic, no functional change.
- lib/store.js — added an unused change_something(point) function after module.exports.

### Flags
1. lib/store.js is broken JS: `pass;` is Python syntax, not JavaScript — calling change_something would throw `ReferenceError: pass is not defined`. The function is also unused/unexported, and the file is missing a trailing newline.
2. Dead code placed after module.exports — change_something is unreachable from other modules and never called, looks like an unfinished placeholder.
3. .idea/ and venv/ are untracked but not part of the diff — IDE config and a Python virtualenv in a Node.js project. Consider adding to .gitignore if unintentional.