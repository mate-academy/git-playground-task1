I renamed function remove(id) to delete_note(id)

# Code Changes Summary

## Changes Made
1. **lib/store.js**
   - Renamed function `remove(id)` to `delete_note(id)` (line 31)
   - Updated module export from `{ all, add, remove }` to `{ all, add, delete_note }` (line 39)
   - Reason: `delete` is a reserved keyword in JavaScript, so used `delete_note` instead

2. **notes.js**
   - Updated function call from `store.remove(id)` to `store.delete_note(id)` (line 32)
   - No other changes to functionality

## Assessment
✓ All changes look intentional and consistent
✓ Function renamed across all files where it's used
✓ Export statement properly updated
✓ No orphaned references or unintended side effects
✓ Code remains functional

All the intended changes were caught.