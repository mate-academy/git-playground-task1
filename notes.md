Changed: notes.js та config.js

## Claude's summary
- `notes.js`: only help/usage strings changed (`my_note`, `my_text`, `delete 0`); no logic changes.
- `lib/config.js`: `SESSION_TIMEOUT_MINUTES` changed from 15 to 5. This is a behavioral change and the one most likely unintended; it is also shown in the help output.
- No other files changed.

Claude caught the stray config.js change.