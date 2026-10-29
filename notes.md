Forudsigelse: Jeg har rettet usage-teksten i `notes.js`, omdøbt `before` til `countBefore` og tilføjet en `count()`-funktion i `lib/store.js`, og ændret session-timeout i `lib/config.js`.

## Claudes resumé af mine ændringer

- `notes.js`: Usage-beskeden for `add` er ændret fra `<your note>` til `<your note text>`. Kun tekst, ingen ændret adfærd.
- `lib/store.js`: Variablen `before` i `remove()` er omdøbt til `countBefore`. Ren omdøbning, samme adfærd.
- `lib/store.js`: Ny funktion `count()`, der returnerer antal noter, og den er eksporteret. Den bliver ikke brugt nogen steder endnu.
- `lib/config.js`: `SESSION_TIMEOUT_MINUTES` er ændret fra 15 til 30. Det ser utilsigtet ud, fordi det ændrer appens adfærd (sessionen låser først efter 30 minutter) og ikke har noget med de andre ændringer at gøre. Beskeden i `notes.js` bruger værdien, så den viser nu 30.

Fangede Claude den tilfældige ændring? Ja, `lib/config.js` blev flagget som utilsigtet. Min forudsigelse nævnte den også, men kun fordi Claude selv havde lavet ændringen og fortalt mig om den.
