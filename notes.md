I deleted some information from js and json files
# Огляд незакомічених змін

Стан на момент перевірки (гілка `main`, нічого не закомічено):

1. **`notes.js`** — видалено функцію `main()` з обробкою команд `add` і `list`. Залишився обірваний фрагмент `for (const note of notes)`, де `notes` більше не оголошено. Файл не компілюється: `SyntaxError: Unexpected token '}'`.
2. **`package.json`** — видалено поля `description`, `bin`, `main`, `scripts`, `license`. Поле `"version"` обірване (без значення). Файл невалідний JSON.
3. **`notes.md`** — некомітнутий файл із текстом: «I deleted some information from js and json files».

Схоже, видалення було ненавмисним. Відновити можна командою:

```
git checkout -- notes.js package.json
```

Ці зміни в коміт не включено.
