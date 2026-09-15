## Prediction (from memory)

I renamed a variable in `lib/store.js`, added a small `count()` helper there, and tweaked one console message in `notes.js`.

## Claude's summary

- `lib/store.js`: renamed the module-level constant `FILE` → `NOTES_FILE` (used in `load()` and `save()`), and added a new exported function `count()` that returns the number of stored notes.
- `notes.js`: reworded the "not found" console message on `delete` from `` `No note #${id} found` `` to `` `No note found with id #${id}` ``.
- `package.json`: bumped `"version"` from `1.0.0` to `1.0.1`. **This looks unintended** — it's unrelated to the store/notes.js work, isn't reflected anywhere else (no changelog entry, no release commit), and there's no version-bump convention visible in the repo. Worth double-checking before committing.

## Did it catch the stray change?

Yes — my prediction only mentioned `lib/store.js` and `notes.js`; I'd completely forgotten the `package.json` version bump. Claude's diff-based summary caught it and correctly flagged it as unrelated/unintended.
