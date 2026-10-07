#!/usr/bin/env node
const store = require("./lib/store");
const config = require("./lib/config");

const [command, ...rest] = process.argv.slice(2);

function main() {
  switch (command) {
    case "add": {
      const text = rest.join(" ").trim();
      if (!text) {
        console.log("Usage: notes add <your note>");
        return;
      }
      const note = store.add(text);
      console.log(`Added note #${note.id}: ${note.text}`);
      break;
    }
    case "list": {
      const notes = store.all();
      if (notes.length === 0) {
        console.log("No notes yet. Add one with: notes add <text>");
        return;
      }
      for (const note of notes) {
        console.log(`#${note.id}  ${note.text}`);
      }
      break;
    }
    case "delete": {
      const id = Number(rest[0]);
      const ok = store.remove(id);
      console.log(ok ? `Deleted note #${id}` : `No note #${id} found`);
      break;
    }
    default:
      console.log("Commands: add <text> | list | delete <id>");
  }


  # Git changes

## My prediction

I expected that I had made three small changes: I removed one line from `notes.js`, one line from `lib/store.js`, and one line from `lib/config.js`. I also expected that the change in `lib/config.js` would be the easiest one to overlook.

## Claude's summary

Claude identified changes in all three files. It found that one line had been removed from `notes.js`, one line from `lib/store.js`, and one line from `lib/config.js`. It also flagged the change in `lib/config.js` as something worth checking because it could have been an unintended edit.

## Did Claude catch the stray change?

Yes. Claude identified the change in `lib/config.js` that I expected could be easy to overlook.

}

main();
