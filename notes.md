Prediction: I renamed the note text variable and added a helper function for printing usage instructions. And i change word in comment that don't affect the script.

Summary of changes in notes.js

Intentional changes:
1. ✅ Variable rename (line 10): text → noteText — clearer, more descriptive variable name
2. ✅ Updated references (lines 11, 16): Uses renamed variable consistently
3. ✅ Message update (line 22): "No notes yet" → "No notes found" — minor wording improvement

⚠️ Unintended/problematic changes:
- Lines 37-38: Indentation is broken and there's a call to printUsage() that doesn't exist in the codebase. This looks like an incomplete refactoring:
  - The original code console.log("Commands: add <text> | list | delete <id>"); was replaced with printUsage()
  - The second console.log line has incorrect indentation (outside the switch/default case)
  - This will cause a runtime error if the default case is hit

Recommendation: The printUsage() call should either be replaced with the original inline console.log, or a
printUsage() function needs to be defined atentation also needs to be fixed.


NOTES: Yes it caught the stray word as Message update


