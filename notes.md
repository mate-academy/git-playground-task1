I changed a few variables names
## Summary of uncommitted changes (branch: develop)

Changed file: `lib/store.js`

- Renamed `FILE` to `FILEPATH` (used in `load` and `save`). No behavior change.
- Renamed exported function `all` to `loadAll`. Export is now `{ loadAll, add, remove }`.
- Added `removeables()`, which is an empty stub.

## Things that look unintended

1. **Broken caller (important):** `notes.js:20` still calls `store.all()`. That function no longer exists, so the list command will throw `store.all is not a function`. Either rename the call to `store.loadAll()` or keep `all` exported.
2. **Broken stub:** `removeables()` has `return` followed by a newline. JavaScript's automatic semicolon insertion makes it `return;`, so the function always returns `undefined`. It is unused and looks like an unfinished edit. Remove it unless it is needed.
3. The `FILE` to `FILEPATH` rename is cosmetic and unrelated to the other changes. It is harmless.
4. The note above said "a few variable names changed", but the `all` to `loadAll` change is an exported API change, not just a variable rename.
