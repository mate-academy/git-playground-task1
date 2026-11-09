I think I changed the empty-list message in notes.js and added a note-counting function in lib/store.js.

## Результат аналізу

Опис виявлених змін:

- `notes.js`: повідомлення про порожній список змінено з «No notes yet. Add one with: notes add <text>» на «Your notes list is empty. Add your first note with: notes add <text>».
- `lib/store.js`: додано функцію `count()`, яка повертає кількість нотаток (`all().length`), і експортовано її в `module.exports`.
- `lib/config.js`: значення `SESSION_TIMEOUT_MINUTES` змінено з 15 на 20 хвилин.

Окремо: зміна `SESSION_TIMEOUT_MINUTES` з 15 до 20 хвилин не була згадана в моєму первісному припущенні й виглядає ненавмисною.

Я виявив цю додаткову зміну під час порівняння diff із моїм первісним припущенням.
