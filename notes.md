# Lesson 1 — Let Claude read your repo

## My prediction (from memory)

Prediction: I renamed a variable in notes.js and added a helper to store.js.

## Claude's summary

- **notes.js**: Renamed the variable `command` to `commands` (lines 5 and 8, both updated, so the app still works). Changed the empty-list message from "No notes yet…" to "No notes created yet…".
- **lib/store.js**: Added a `count()` helper that returns the number of stored notes, and exported it. Nothing calls it yet.
- **lib/config.js**: Changed `SESSION_TIMEOUT_MINUTES` from 15 to 16.

**Flagged as possibly unintended:**
- The `config.js` timeout change (15 → 16) looks like a stray edit. It isn't related to the other changes, it changes real behavior (sessions lock a minute later), and the prediction doesn't mention it.
- The new name `commands` is plural, but the variable holds a single command, so `command` described it better.

## Did Claude catch the stray change?

Yes, Claude caught the stray timeout change in config.js, which I left out of my prediction.
