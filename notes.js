#!/usr/bin/env node
const store = require("./lib/store");
const config = require("./lib/config");

const [command, ...args] = process.argv.slice(2);

function main() {
  switch (command) {
    case "add": {
      const text = args.join(" ").trim();
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
      const id = Number(args[0]);
      const wasDeleted = store.remove(id);
      console.log(wasDeleted ? `Deleted note #${id}` : `No note #${id} found`);
      break;
    }
    default:
      console.log("Commands: add <text> | list | delete <id>");
      console.log(`(Session locks after ${config.SESSION_TIMEOUT_MINUTES} minutes of inactivity.)`);
  }
}

main();
