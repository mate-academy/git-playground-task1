I've added some lines to notes.json.





What you changed (uncommitted)



1\. README.md has these edits:

&#x20;  - New since last time: the "Layout:" line now ends with the junk text dgdfgdf.

&#x20;  - "- DONE" added to the "Set up" heading.

&#x20;  - "- DONE" added to the "Lesson 1 task" heading.

&#x20;  - "DONE" added to steps 1 and 2.

2\. notes.md is new and untracked. It was renamed from Notes.md, so the case now matches. It holds one line: "I've added some lines to notes.js."



Flags



\- Stray edit: dgdfgdf in README.md. It sits at the end of the Layout line, directly after holds app settings.. It looks like a typo or accidental keystrokes. This is the stray change the lesson asks about. Delete it unless you meant to keep it.

\- Wrong prediction. notes.md says you added lines to notes.js. notes.js has no changes. The edits are all in README.md.

\- Possible mix-up. The "DONE" marks are your own progress notes and not part of the lesson. Decide whether they belong in the pull request.

\- Check status. notes.md is not empty, so scripts/check.js will pass.



Source code



notes.js, lib/store.js, lib/config.js, and scripts/check.js have no changes.



For notes.md



Yes, the summary caught the stray change. It found dgdfgdf in the README.md Layout line, which your prediction missed.



I have not changed any files. Tell me if you want me to remove dgdfgdf, fix the prediction, and add this summary to notes.md.





It caught the stray change.

