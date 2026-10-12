I increaed the session timeout variable to 25 and created a function to display all even notes based on its nextId

You have three modified files and one new untracked file.

What you changed
- lib/config.js: SESSION_TIMEOUT_MINUTES goes from 15 to 25.
- lib/store.js: new showEven(), which filters notes to those with an even id, prints each as id: text, and returns them. It's added to module.exports.
- package.json: version goes from 1.0.0 to 1.0.1.
- notes.md (untracked): a scratch note describing the timeout change and the even-notes function. It also has a typo ("increaed").

Things that look unintended or worth a second look
1. The version bump isn't in your notes. notes.md mentions the timeout and showEven but not 1.0.1. If it was deliberate, a new function would normally be a minor bump (1.1.0), not a patch. If it wasn't, revert it.
2. showEven is dead code. Nothing in the CLI calls it, so users can't reach it yet. I only looked at the diff, so I haven't checked notes.js.
3. showEven mixes printing with data access. Every other export in store.js appears to be pure data logic. It's cleaner to return the filtered list and let the CLI do the printing.
4. notes.md probably shouldn't be committed. It reads like personal scratch notes. Leave it out of git add, or add it to .gitignore, unless you want it in the repo.
5. The timeout change is a behavior change. The session now locks after 25 minutes instead of 15. It matches your notes, so it looks intentional. Check that it belongs in the same commit as the unrelated showEven feature, and consider separate commits.

it did catch the changes that I made and small One that I have forgot to mention
 