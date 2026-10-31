#!/usr/bin/env node
const store = require("./lib/store");
const config = require("./lib/config");

const [command, ...rest] = process.argv.slice(2);

// Returns the id as a positive integer, or null if it isn't a valid id.
function parseId(value) {
  const id = Number(value);
  return Number.isInteger(id) && id > 0 ? id : null;
}

// Returns true if the note text contains something other than whitespace.
function isValidText(text) {
  return typeof text === "string" && text.trim().length > 0;
}

function main() {
  switch (command) {
    case "add": {
      const text = rest.join(" ").trim();
      if (!isValidText(text)) {
        console.log("Usage: notes add <your note>");
        return;
      }
      const note = store.add(text);
      console.log(`Added note #${note.id}: "${note.text}" (run "notes list" to see all notes)`);
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
      const id = parseId(rest[0]);
      if (id === null) {
        console.log("Usage: notes delete <id>");
        return;
      }
      const ok = store.remove(id);
      console.log(ok ? `Deleted note #${id}` : `No note #${id} found. Run "notes list" to see ids.`);
      break;
    }
    default:
      console.log("Commands: add <text> | list | delete <id>");
      console.log(`(Session locks after ${config.SESSION_TIMEOUT_MINUTES} minutes of inactivity.)`);
  }
}

main();
