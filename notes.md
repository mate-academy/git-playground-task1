I added a `count` command to notes.js backed by a new `store.count()` function, and renamed the `remove(id)` parameter to `noteId` in lib/store.js.

## Claude's summary

Three files changed:
- **notes.js**: added a new `count` command that prints `store.count()`, and updated the default-case usage/help line to list it.
- **lib/store.js**: added a new exported `count()` function; renamed the `remove(id)` parameter to `noteId` (cosmetic, no behavior change).
- **lib/config.js**: changed `SESSION_TIMEOUT_MINUTES` from `15` to `20`. This one looks unrelated to the `count` feature touched in the other two files — flagging it as a likely unintended/stray edit worth double-checking before committing.

My prediction above caught the `count` feature and the rename but missed the config.js timeout change — Claude's actual-diff summary is what caught that stray edit.
