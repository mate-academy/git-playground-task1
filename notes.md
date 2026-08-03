I added a function to check if a string is a palindrome and a command to delete the palindromes using switch 'delete-palindromes'

## Claude's summary

Two changes, both new/untracked plus one modified file — no unintended edits found:

1. **`lib/palindrome.js`** (new) — exports `isPalindrome(str)`, which lowercases the input, strips non-alphanumeric characters, and checks it against its own reverse.
2. **`notes.js`** (modified) — imports `isPalindrome`, adds a new `delete-palindromes` case to the command switch that filters all notes for palindrome text, deletes each match via `store.remove`, and reports how many were deleted (or that none were found). The default help text was updated to list the new command.

Nothing unintended — the diff is limited to exactly these two pieces, matching the prediction above.

## My last note

No stray changes to catch.
