Added printUsage() method

❯ Summarize what I've changed, and flag anything that looks unintended.

  Ran 1 shell command

Here's what changed:

notes.js — Added a new printUsage() function that prints a usage message (command list + descriptions), and calls it in the default case of the switch statement.

notes.md (untracked, new file) — Contains a single line: "Added printUsage() method".

Things that look unintended:

1. Duplicate output in the default case (notes.js:44-47): printUsage() already prints "Commands: add <text> | list | delete <id>" equivalent info, but the old console.log("Commands: add <text> | list | delete <id>") line right after it wasn't removed — so running an unknown command will now print the command list twice in slightly different formats.
2. Trailing whitespace on the blank lines after the new function (lines with trailing spaces after }).
3. notes.md looks like a scratch/commit-message note, not real documentation — it's untracked and just describes the change ("Added printUsage() method"), which suggests it may have been an accidental leftover file rather than something meant to be committed.

Want me to clean up the duplicate log line and trailing whitespace, and check whether notes.md should be deleted or kept?

✻ Crunched for 10s · done 2:04 AM


Summary - Claude caught the duplicate console.log in the default case'