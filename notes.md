Added "author" to package.json

extra line in notes.js









Your uncommitted changes are small, and one of them breaks package.json.



What changed

\- package.json: you added "author": "R.Whiteley".

\- notes.js (delete case): the const ok = store.remove(id); line is now over-indented, and there's a new blank line after it. Nothing else changed.

\- notes.md (new, untracked): two lines of notes saying you added the author field and an extra line in notes.js.



Looks unintended

1\. package.json is now invalid JSON. The line before the new one, "license": "MIT", has no trailing comma. npm start and any other npm command will fail to parse it. The fix is to change it to "license": "MIT",. This could also break the CI check in .github/workflows/check.yml if it reads package.json.

2\. The notes.js change is whitespace only. The extra indentation and blank line look accidental. You'll probably want to revert that hunk with git checkout -p notes.js or git restore notes.js.

3\. notes.md is probably a scratch file. Decide whether to commit it or delete it. It isn't covered by .gitignore.



I haven't changed anything. I can fix the comma, revert notes.js, and leave notes.md as it is if you like.







Stray change was caught

