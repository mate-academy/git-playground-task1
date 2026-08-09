Añadí el comando `search <text>` a notes.js (con `printNotes` extraído de `list`), su lógica en `lib/store.js`, y lo documenté en el README.

## Resumen de Claude

- Nuevo comando `search <text>` (case-insensitive, subcadena) en `notes.js`, con su lógica en `lib/store.js:31-40` y export añadido.
- Refactor: el bucle de impresión de `list` se extrajo a `printNotes()` y se reutiliza en `list` y `search`.
- Texto de ayuda del `default` actualizado para incluir `search`.
- README: nueva línea documentando `search <text>`.

Nada parece no deseado: todos los cambios son coherentes con añadir `search`, sin ediciones sueltas en archivos no relacionados (`lib/config.js`, `package.json` intactos).
