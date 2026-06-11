## Predicting what you changed, from memory:
* I added a few explanation comments to notes.js

## Claude's summary of changes
Changes:

1. notes.js — Two comments added:
  - Line after console.log in the add case: explains the ID is logged so the user can delete the note later.
  - Line before store.all() in the list case: same rationale for showing IDs.
2. notes.md — New untracked file containing a self-prediction note ("Predicting what you changed, from memory").

Flags:

- The two added comments explain behavior that the code already makes obvious (console.log(\Added note #${note.id}`)` speaks for itself). Per the project's no-redundant-comments norm, these are candidates for removal.
- notes.md is untracked and looks like a scratch/experiment file, not source code. Probably not meant to be committed — worth either deleting or adding to .gitignore.

Nothing looks accidentally destructive, just some comments you may not want to keep and an ad-hoc markdown file sitting loose in the repo.

