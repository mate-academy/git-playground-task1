# Notes

- added a note to notes.json and added info to package.json
- mateacademy-ai-mentor reviewed my task and stated it was unsuccessful
- Claude caught the stray changes: its summary flagged the potential unintended changes, including the vague `keywords` edit in `package.json`, the hand-written `notes.json` entry, and the detached HEAD.
- Pull request: https://github.com/mate-academy/git-playground-task1/pull/489 (from `dkchon:read-repo` into `mate-academy:main`)

## Summary of changes

**Tracked by git**
- `package.json` (modified): added `"keywords": ["unit4", "git-playground"]`.
- `notes.md` (new, untracked): `# Notes` heading plus two bullets, "added a note to notes.json" and "added info to package.json".

**Ignored by git** (`.gitignore` line 2)
- `notes.json`: notes were added and deleted with `notes.js`, then the file was edited by hand. It now holds note #2, "this is a test change", with `nextId` at 3. None of this will show up in a commit.

**Things that may be unintended**
1. **Detached HEAD.** On commit `cf8666d`, not a branch. A commit made here is easy to lose, so create a branch first (`git switch -c <name>`).
2. **Guessed edits.**
   - " this is a test change" went into `notes.json` as note #2.
   - The two `notes.md` bullets are log lines written from "add added a note to notes.json" and "add added info to package.json", read as text for `notes.md` rather than edits to those files.
   - The `keywords` array was chosen (option 3), but "this lis for unit4 git playground" was vague.
3. **The second `notes.md` bullet is misleading.** "added info to package.json" describes the `keywords` edit, but that change was made before the line existed.
4. **No `node notes.js` command created note #2.** It was written into `notes.json` by hand. The file works with the tool, but the tool never created that note.
5. **Possible duplicate.** `notes.md` and the `notes.js` / `notes.json` files overlap in purpose and name. This may be fine for a playground.

**Possible next steps:** make a branch and commit `package.json` and `notes.md`, reset `notes.json` to an empty list, or both.
