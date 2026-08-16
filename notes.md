I removed comments from config.js and added the save function to store.js.

## CLaude summary:
 notes.js — ⚠️ likely unintended: the closing } of function main() { ... } was deleted. The switch block still closes properly, but main()'s own closing brace is gone, so main(); on line 42 ends up inside main's own body instead of after it, and the file never closes the function. This is a syntax error, not just a style issue.


Claude caught the stray change in notes.js that I had intentionally forgotten about.
