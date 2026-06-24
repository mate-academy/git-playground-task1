All three changes look unintended. Here's the summary:

What changed

┌──────────────┬────────────────────────────────────────────────────────────┐
│     File     │                           Change                           │
├──────────────┼────────────────────────────────────────────────────────────┤
│ notes.js     │ Added const temp1 = require("./lib/temp"); (line 4)        │
├──────────────┼────────────────────────────────────────────────────────────┤
│ package.json │ Added "temp1": "package1" after the license line           │
├──────────────┼────────────────────────────────────────────────────────────┤
│ notes.md     │ New untracked file, contains just Added new variable temp1 │
└──────────────┴────────────────────────────────────────────────────────────┘

Problems — all of these look unintended                                                                              
1. notes.js:4 will crash the app at startup. It requires ./lib/temp, but lib/ only contains config.js and store.js — there's no temp.js. This throws MODULE_NOT_F The temp1 binding is also never usedanywhere.
2. package.json is now invalid JSON. Two iss
  - The "license": "MIT" line is missing a trailing comma before the new entry.
  - "temp1": "package1" is not a valid npm f

Together these break any tool that parses thstart, etc.).
3. notes.md reads like a stray scratch/test note ("Added new variable temp1") rather than real documentation.

My read

These three edits — a temp1 variable, a temp1 package field, and a note about adding temp1 — look like leftover
scratch/experiment edits, not deliberate cha, package1) reinforces that. I'd recommendreverting all three:

git checkout -- notes.js package.json
rm notes.md

Want me to revert them?