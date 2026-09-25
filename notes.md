1. I've changed the name of variable store to shope in notes.js

*claude writes:*

● Changes

  1. notes.js (modified): the variable store is renamed to shop. That covers
     the require("./lib/store") import and the three calls, add, all and
     remove. A grep finds no leftover store references, so the rename is
     complete and the file should still work.
  2. notes.md (untracked, new): one line, "1. Changed the name of variable".

  Possibly unintended

  - shop is a worse name than store. The module is ./lib/store and it holds
    notes, so shop is misleading. If the rename was an experiment or a git
    exercise, that is fine. Otherwise you may want to revert it.
  - notes.md is not in git yet. If it is only a scratch note about the
    rename, don't commit it. If you want it, git add it explicitly.
  - The notes.js diff has no whitespace or unrelated edits. Nothing else
    changed.

