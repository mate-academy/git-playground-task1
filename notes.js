#!/usr/bin/env node
const store = require("./lib/store");
const config = require("./lib/config");

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
  const id = Number(args[0]);
  if (!Number.isInteger(id)) {
    console.log("Usage: notes delete <id>");
    return;
  }
  const ok = store.remove(id);
  console.log(ok ? `Deleted note #${id}` : `No note #${id} found`);
}

function printHelp() {
  console.log("Commands: add <text> | list | delete <id>");
  console.log(`(Session locks after ${config.SESSION_TIMEOUT_MINUTES} minutes of inactivity.)`);
}

const commands = {
  add: addNote,
  list: listNotes,
  delete: deleteNote,
};

function main() {
  const [command, ...args] = process.argv.slice(2);
  const handler = commands[command];
  if (!handler) {
    printHelp();
    return;
  }
  handler(args);
}

main();
