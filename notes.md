added if (!fs.statSync(file).isFile()) check
added testValue

From Claude:
Here's what changed (none of it made by me in this session — these are pre-existing working-tree diffs):

scripts/check.js — added a check that notes.md is actually a file (not a directory), failing with a clear message if not. Reasonable, looks intentional.

notes.js — added a line in the delete case:


const testValue = isNaN(id) ? "not a number" : id;
This computes testValue but never uses it — it's dead code, and the name "testValue" reads like leftover debugging. This looks unintended and should probably be removed unless you meant to use it for something (e.g. validating id before calling store.remove).

notes.md — new untracked file, required by scripts/check.js's validation.