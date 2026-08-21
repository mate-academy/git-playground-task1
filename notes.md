# Changes

- Renamed `all()` to `get_notes()` in `lib/store.js` (and updated its export in `module.exports`).
- Updated `notes.js` to call `store.get_notes()` instead of `store.all()` in the `list` command handler.
