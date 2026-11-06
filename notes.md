# Notes

I think Claude will find the errant coding or comments.

## Claude's summary of my changes

Nothing is committed yet. Git shows five changed files:

1. **`README.md`** (modified): a "Notes" section with my learning and buyout message.
2. **`notes.js`** (modified), two changes:
   - The Pledge of Allegiance as a three-line comment under the shebang.
   - The empty-text check in `add` is removed.
3. **`lib/store.js`** (modified): in `remove()`, `before` is renamed `countBefore` in both places. It's a pure rename.
4. **`lib/phone-check.js`** (new): the phone-number checker, which passes on the repo.
5. **`notes.md`** (new): a heading and my prediction that Claude will find the errant coding or comments.

`notes.json` also exists but is ignored by git.

### Flags

- **Removed validation (behavior change):** `node notes.js add` with no text now saves a blank note and prints `Added note #N: `. That's a regression, though I asked for it.
- **Pledge comment:** harmless, but nothing in the code explains why it's there.
- **The README buyout line will go public** if it's in the PR.
- **Minor:** the README edit mixes line endings, and the phone checker isn't wired into CI.
