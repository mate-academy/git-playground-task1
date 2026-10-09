# Ändringar i notes.js

- `delete`: validerar att id är ett heltal, annars visas användningsmeddelande.
- `add`: användningsmeddelandet skrivs nu till stderr istället för stdout.
- `list`: skriver ut antal anteckningar efter listan.

## Claude-sammanfattning

Ändrat (endast `notes.js`, 3 hunkar):
- `add`: användningsmeddelandet går nu till stderr (`console.error`).
- `list`: ny rad med antal anteckningar efter listan.
- `delete`: id valideras med `Number.isInteger`, annars användningsmeddelande på stderr.

Flaggat:
- Inga ändringar i andra filer (`lib/store.js`, `lib/config.js`) – ingen oavsiktlig ändring hittades.
- `list` skriver nu ut en extra rad, vilket kan påverka skript som parsar utdata.
- Filen heter `Notes.md`, men README säger `notes.md`; det spelar roll på skiftlägeskänsliga system.
