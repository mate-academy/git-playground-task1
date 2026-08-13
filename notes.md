My changes:
- edited the "no notes" message in notes.js
- added a count() function in store.js

## Claude's review
- notes.js: updated the empty-notes message
- lib/store.js: added and exported a count() function
- lib/config.js: SESSION_TIMEOUT_MINUTES changed from 15 to 45

## Did it catch the stray change?
Yes. Claude detected the config.js change (SESSION_TIMEOUT 15 to 45) that I left out of my prediction. It flagged it as the most significant change and asked me to confirm the tradeoff, though it assumed it was intentional rather than accidental.