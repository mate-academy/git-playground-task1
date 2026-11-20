I have changed some strings in notes.js
Awkward wording: "Note added #1" and "Note deleted #1" read a bit oddly, with the number trailing the verb. The old "Added note #1" read more naturally. If you meant to change the wording, this may not be the result you wanted.
Inconsistent messages: the not-found message in the same line still says No note #id found. The list and add error messages weren't touched either, so the style is now mixed.
Stray file: notes.md looks like a scratch note rather than project content. Delete it or add it to .gitignore unless you want it committed.
Nothing else depends on the old strings: I searched the repo, including check.js and the workflow, and the old strings appear nowhere else. This change shouldn't break the check.
Nothing else is modified.