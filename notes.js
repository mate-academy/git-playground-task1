#!/usr/bin/env node
/**
 * Notes CLI Application
 *
 * A command-line tool for managing simple text notes with persistent storage.
 * Provides commands to add, list, and delete notes. Notes are stored in a
 * local store and automatically expire after a configured session timeout.
 *
 * Usage:
 *   notes add <text>     - Add a new note
 *   notes list           - Display all notes
 *   notes delete <id>    - Remove a note by ID
 */

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
      console.log(`(Session locks after ${config.SESSION_TIMEOUT_MINUTES} minutes of inactivity.)`);
  }
}
/** Main function */
main();
