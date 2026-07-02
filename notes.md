- renamed "save" to "saveData" function;
- add REDUNDANT_VARIABLE to config.js;

Summary of changes:

✅ Intended:

- Renamed function save to saveData in lib/store.js (line 14)
- Updated both function calls from save(data) to saveData(data) (lines 27 & 35)

⚠️ Unintended/Suspicious:

1. Quote style change in lib/store.js — all double quotes converted to single quotes throughout the file. This was likely already in the working directory and wasn't something I changed.
2. New variable added to lib/config.js — REDUNDANT_VARIABLE: 'Greg' was added. This looks unintended and doesn't appear related to your request.

I'd recommend either reverting the quote style changes (if you want consistency with your existing style) and definitely removing that REDUNDANT_VARIABLE line from config.js, as it appears to be stray changes in your working directory.
