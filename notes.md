## Prediction
Added search functionality with case-insensitive matching to lib/store.js.

## Commit Message Draft
Add case-insensitive search to store

- Implement `matches(note, term)` helper that uses toLowerCase() on both note text and search term
- Add `search(term)` function that filters notes by matching against the search term
- Export new search function from lib/store.js module

This enables the notes app to support searching notes by text with case-insensitive comparison.
