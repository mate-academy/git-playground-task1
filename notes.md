# Lesson 1 notes

## Prediction (from memory)

I renamed `FILE` to `DATA_FILE` in lib/store.js, added a `count()` function there, and reworded the empty-list message in notes.js.

## Claude's summary

> Prompt: "Summarize what I've changed, and flag anything that looks unintended."
>
> You have three modified files, all unstaged:
>
> - **lib/store.js** — renamed the constant `FILE` to `DATA_FILE` (all three usages updated), and added a new exported `count()` function that returns the number of stored notes.
> - **notes.js** — changed the empty-list message from "No notes yet…" to "You have no notes yet…".
> - **lib/config.js** — `SESSION_TIMEOUT_MINUTES` changed from 15 to 30.
>
> Flag: the `lib/config.js` change looks unintended. It's a behavioural change (doubling the session lock timeout) unrelated to the store rename / new function / message rewording, and nothing else in the diff references it. If it wasn't deliberate, revert it with `git checkout -- lib/config.js`. The other changes are consistent with each other and look intentional.

## Did it catch the stray change?

Yes — the prediction above left out the `SESSION_TIMEOUT_MINUTES` edit in lib/config.js, and the summary both listed it and specifically flagged it as unrelated to the rest of the changes.
