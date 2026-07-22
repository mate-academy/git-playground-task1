I think I will get errors because I changed `notes` to `notes1` on line 10 and line 19 of lib/store.js.

**Claude's summary:**
- `lib/store.js`: Renamed the `notes` property to `notes1` in two places — the default fallback object inside `load()` (line 10) and the return value of `all()` (line 19). The rest of the file (`add()` and `remove()`) still references `data.notes`, so the rename is inconsistent. This breaks `node notes.js add` with a `TypeError: Cannot read properties of undefined (reading 'push')`, since `data.notes` is now `undefined`. `list` happens to still work on a fresh repo because the empty-state fallback also uses `notes1`.
- `lib/config.js`: Changed `SESSION_TIMEOUT_MINUTES` from `15` to `20`. This looks unrelated to the rename and unintended.

Claude did catch the stray change in `lib/config.js` — I hadn't mentioned it, and it correctly flagged it as unrelated to my intended edit.
