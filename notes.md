Prediction: I changed the empty-list message in notes.js and made a couple of small changes in lib/store.js.

## Claude summary

Modified files:
- lib/config.js: SESSION_TIMEOUT_MINUTES changed from 15 to 30.
- lib/store.js: renamed `before` to `countBefore` in `remove()`, and added an exported `count()` helper.
- notes.js: changed the empty-list message to "Add your first with: notes add <text>".

Claude flagged the session timeout change from 15 to 30 as the most likely unintended change because it was not mentioned in my prediction.

## Conclusion

Yes, Claude caught the stray change in lib/config.js that I had left out of my prediction.
