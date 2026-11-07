Prediction:
I changed a variable name and updated config.
Claude's summary :

Changes against main (3 files modified, 1 untracked):
- NOTES.md (new): contains the prediction "I changed a variable name and updated config."
- notes.js line 2: renamed `store` to `storefile` in the require, but lines 15, 20, and 32 still call `store.add`, `store.all`, and `store.remove`. These will throw ReferenceError at runtime. Flagged as unintended.
- lib/config.js line 3: SESSION_TIMEOUT_MINUTES changed from 15 to 5. The comment still describes the inactivity lock, so this is a behavior change that may be unintended. Flagged.
- README.md line 25: "blablabla" appended with no trailing newline. Placeholder text. Flagged.

Did Claude catch the stray change? Yes. It flagged all three unintended changes, including the broken `store` rename in notes.js, which was the most serious one.
