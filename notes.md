# Lesson 1 Notes

## My prediction (before asking Claude)

I think I changed the session timeout in `lib/config.js` and tweaked some output messages in `notes.js`. I don't remember touching anything else.

## Claude's summary

Changes across three files:

- **`lib/config.js`** — `SESSION_TIMEOUT_MINUTES` bumped from 15 to 30, `MAX_NOTES: 100` added, and the inline comments were removed.
- **`notes.js`** — The usage hint for `add` changed from `"Usage: notes add <your note>"` to `"Usage: notes add <text>"`, and the success message was reformatted to `Note #N added: "..."`.
- **`lib/store.js`** — JSON indentation in `save()` changed from 2 spaces to 4 spaces. This is easy to miss since it's a one-character difference with no visible effect on the CLI output.

## Did it catch the stray change?

Yes — Claude flagged the `store.js` indent change as the likely unintended edit, since it has no user-visible effect and wasn't something I mentioned in my prediction.
