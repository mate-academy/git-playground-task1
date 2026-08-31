In config ("./lib/config"), changed SESSION\_TIMEOUT\_MINUTES from 15 to 30.



Claude's review:



Flag: the store.js change looks unintended



\- save() still writes with fs.writeFileSync(FILE, JSON.stringify(...)), which defaults to utf8. Reading that file back as "utf16" will misdecode it (garbled/mojibake or a JSON parse error), which then gets silently swallowed by the catch and reset to { nextId: 1, notes: \[] } — effectively wiping your notes data on next load.

\- Also, "utf16" isn't even a valid Node.js Buffer encoding — the valid one is "utf16le" — so this could throw an unrecognized-encoding error, again getting caught and masked by the same catch.

\- NOTES.md makes no mention of this change, suggesting it wasn't deliberate.



I'd recommend reverting lib/store.js back to "utf8" unless there's a specific reason for the switch you haven't mentioned. Want me to fix it?



✻ Worked for 12s · done 10:41



※ recap: You're reviewing uncommitted changes: config.js's timeout bump looks intentional, but store.js's encoding change to "utf16" looks like an unintended bug that could wipe notes.json data. Next: confirm whether to revert it to "utf8". (disable recaps in /config)



My note:

Claude has indeed caught the stray change.

