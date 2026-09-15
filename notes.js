#!/usr/bin/env node
const store = require("./lib/store");
const config = require("./lib/config");

const [command, ...rest] = process.argv.slice(2);

function addNote(args) {
  const text = args.join(" ").trim();
  if (!text) {
    console.log("Usage: notes add <your note>");
    return;
  }
  const note = store.add(text);
  console.log(`Added note #${note.id}: ${note.text}`);
}

function listNotes() {
  const notes = store.all();
  if (notes.length === 0) {
    console.log("No notes yet. Add one with: notes add <text>");
    return;
  }
  for (const note of notes) {
    console.log(`#${note.id}  ${note.text}`);
  }
}

function deleteNote(args) {
  const noteId = Number(args[0]);
  const wasRemoved = store.remove(noteId);
  console.log(wasRemoved ? `Deleted note #${noteId}` : `No note #${noteId} found`);
}

function showHelp() {
  console.log("Commands: add <text> | list | delete <id>");
  console.log(`(Session locks after ${config.SESSION_TIMEOUT_MINUTES} minutes of inactivity.)`);
}

function main() {
  switch (command) {
    case "add":
      addNote(rest);
      break;
    case "list":
      listNotes();
      break;
    case "delete":
      deleteNote(rest);
      break;
    default:
      showHelp();
  }
}

main();
