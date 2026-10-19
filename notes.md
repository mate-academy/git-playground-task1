Ich kann kein Javascript
Deswegen nur zwei neue Konstanten

Du hast drei Änderungen auf dem Branch main, noch nichts davon ist committet:

Geändert

lib/store.js:3: neue Zeile const number = 0;
scripts/check.js:7: neue Zeile const pass = true;

Neu (untracked)

notes.md: enthält “Ich kann kein Javascript / Deswegen nur zwei neue Konstanten”

Die beiden Konstanten werden nirgends verwendet. Falls scripts/check.js die Datei notes.md prüft (siehe Zeile 9), kann die neue Notiz das Ergebnis beeinflussen.