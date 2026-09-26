Я зміню текст 'Added note' на 'Saved note' в notes.js та додав функцію count в lib/store.js.

## Claude's summary

**What you changed**

- `lib/config.js`: `SESSION_TIMEOUT_MINUTES` went from 15 to 10.
- `lib/store.js`: added a `count()` function that returns `all().length`, and exported it.
- `notes.js`: the `add` output changed from "Added note #…" to "Saved note #…".
- `notes.md` (untracked, new): a one-line note, in Ukrainian, saying you changed "Added note" to "Saved note" and added `count` to `store.js`.

**What looks unintended**

- **The timeout change.** `notes.md` doesn't mention it, so it's probably a stray edit. Revert it if you didn't mean to change the session timeout.
- **`count()` is never called.** Nothing in the diff uses it. That's fine if it's groundwork for something else, otherwise it's dead code.
- **`notes.md` itself.** It's untracked and reads like a scratch changelog. Decide whether to commit it, delete it, or add it to `.gitignore`.
- **"Saved" vs "Added".** Search the repo, including `check.js` and the `check.yml` workflow, for the old "Added note" string. If they match on that output, the CI check will break.

Claude correctly caught the unintended `SESSION_TIMEOUT_MINUTES` change that wasn't mentioned in the prediction above.
