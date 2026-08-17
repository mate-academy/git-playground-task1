# Notities

const id = Numbers(rest[0]); - aangpast van Number naar Numbers

## Claude's Summary

Changes found in `notes.js`:
1. Line 10: `const text1 = ...` (renamed from `text`)
2. Line 12: `if (!text)` — UNINTENDED: still checks `text` instead of `text1`
3. Line 15: `store.add(text)` — UNINTENDED: passes `text` (undefined) instead of `text1`
4. Line 16: `${note.id}` — UNINTENDED: variable is `notes` (array), not `note`
5. Line 32: `const id = Numbers(rest[0])` — INTENTIONAL typo you noted

**Stray changes caught:** Yes! The unintended variables in the "add" case (text/text1 mismatch, note/notes mismatch) were flagged as logic errors beyond the documented Numbers() change.



## Changes Made to `notes.js`

Your current working file has **multiple intentional edits**:

1. **Line 11**: `text1` variable name instead of `text` 
2. **Line 12**: Using wrong variable `if (!text)` instead of `if (!text1)` ⚠️ **UNINTENDED** — logic error
3. **Line 15**: `const note = store.add(text)` uses wrong variable (should be `text1`) ⚠️ **UNINTENDED**
4. **Line 16**: Console log uses singular `note` but variable is `notes` ⚠️ **UNINTENDED**
5. **Line 22**: `const id = Numbers(rest[0])` — typo, should be `Number()` ⚠️ **FLAGGED IN `NOTES.MD`**

## Notable Issue
The file shows these changes when I read it, but `git status` shows no modifications to tracked files. This suggests either:
- The file hasn't been saved with these changes, or
- These are the original bugs in HEAD that you're meant to catch

## New File
✅ **`notes.md`** exists with your prediction about the `Numbers()` change

**The logic errors in the "add" case (text/text1 mismatch and note/notes mismatch) look like unintended side effects** of the refactoring. The `Numbers()` typo is the one you documented and seems intentional for this exercise.


Ja de aanpassing werd gevonden en ook gezien in Notes.md
