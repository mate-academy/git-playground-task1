What changed
- lib/store.js: adds getNoteCount(notes), which returns notes.length.
- notes.js: rewords two console messages. The empty-list hint now says notes add the text of your note, and the default usage line says add the text provided.
- lib/config.js: adds a // New comment line above SESSION_TIMEOUT_MINUTES.
- lib/notes.md (new, untracked): your "My prediction" note.

Possibly unintended
1. getNoteCount is dead code. It isn't exported (I didn't check the bottom of the file) and nothing calls it. It also takes notes as a parameter instead of loading them, unlike all() and add(). Its 4-space indentation doesn't match the 2-space style used elsewhere.
2. The usage text got worse. add <text> was the standard placeholder syntax. add the text provided reads like a literal command, so it's unclear what to type. If you did this on purpose, it's fine.
3. // New comment in config.js is noise. It says nothing and sits inside the comment explaining the session timeout. It looks like a leftover test edit.
4. lib/notes.md is in lib/. That's an odd place for a prediction note, and git add . would commit it.
## Claude's summary
Changes in the working tree:
- `lib/store.js`: adds `getNoteCount(notes)`, which returns `notes.length`.
- `notes.js`: rewords two console messages. The empty-list hint now says `notes add the text of your note`, and the default usage line says `add the text provided`.
- `lib/config.js`: adds a `// New comment` line above `SESSION_TIMEOUT_MINUTES`.

Flagged as possibly unintended:
1. `getNoteCount` is dead code: not exported, never called, takes `notes` as a parameter unlike `all()`/`add()`, and uses 4-space indentation instead of 2.
2. The usage text got worse: `add the text provided` reads like a literal command, where `add <text>` was clearer.
3. `// New comment` in `config.js` is noise inside the session-timeout comment.
4. The notes file was in `lib/` instead of the repo root.
