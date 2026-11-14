# notes

A small command-line tool for keeping plain-text notes. Notes are saved to `notes.json` in the project root.

## Usage

```sh
node notes.js add <your note>   # add a note
node notes.js list              # list all notes
node notes.js delete <id>       # delete the note with this id
```

Running `node notes.js` with no command, or with an unknown one, prints the list of commands.

## Commands

| Command          | Description                                      |
| ---------------- | ------------------------------------------------ |
| `add <text>`     | Adds a note. Everything after `add` is the text. |
| `list`           | Prints every note as `#id  text`.                |
| `delete <id>`    | Removes the note with the given id.              |

Each note gets a numeric id that keeps increasing, so ids are not reused after a delete.

## Layout

- `notes.js`: command-line entry point.
- `lib/store.js`: loads and saves notes in `notes.json`.
- `lib/config.js`: app settings.
