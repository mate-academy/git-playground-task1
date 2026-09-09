Changed prompt text from "your note" to "my note" in the console log on line 12 of notes.js.

Summary

Recent commits (last 5):
- Added a GitHub Actions workflow (.github/workflows/check.yml)
- Added scripts/check.js for validation
- Updated README.md multiple times

Current uncommitted changes:

1. notes.js (modified) — Changed the usage prompt text on line 12 from "your note" to "my note". This appears intentional based on the accompanying notes.md file.
2. notes.md (untracked) — A documentation file describing the change made to notes.js.

⚠️ Potential issue:

On line 33 of notes.js, there's a typo: Deletedd should be Deleted (double 'd'). This looks unintended.


пошукай ще.
  Ran 1 shell command

Ви праві! Я пропустив зміну. Ось всі зміни в notes.js:

1. Рядок 12: "your note" → "my note" ✓ (я це помітив)
2. Рядок 16: "Added note" → "Added notes" (множина) ✗ Я це не згадав!
3. Рядок 33: "Deleted note" → "Deletedd note" (опечатка з подвійним 'd') ✓ (я це помітив)