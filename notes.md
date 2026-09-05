changed text in readmen and a header

Claude caught the stray change in the package.json file.


package.json is the serious one — "bin" was renamed to "bn". This is a typo, not a valid npm field. It silently breaks the package's executable: npm link / npm install -g will no longer install a notes command, since npm ignores the unknown bn key without erroring. The JSON is still syntactically valid, so nothing will complain at you — it just stops working. This should be reverted.

README: copy of  repo — this was deleted with nothing in its place, leaving broken grammar and a double space. Same read as before: a stray keystroke rather than an intentional rewording.

notes.md looks like a personal scratch note ("readmen" is a typo for "readme") rather than something belonging in the repo. Either delete it or add it to .gitignore.