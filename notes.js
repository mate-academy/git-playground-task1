#!/usr/bin/env node
const store = require("./lib/store");
const config = require("./lib/config");

const [command, ...rest] = process.argv.slice(2);

const commands = {
  add() {
    const text = rest.join(" ").trim();
    if (!text) return console.log("Usage: notes add Data already added to the store.");
    const note = store.add(text);
    console.log(`Added note #${note.id}: ${note.text}`);
  },
  list() {
    const notes = store.all();
    if (!notes.length) return console.log("No notes yet. Add one with: notes add <text>");
    notes.forEach((note) => console.log(`#${note.id}  ${note.text}`));
  },
  delete() {
    const id = Number(rest[0]);
    console.log(store.remove(id) ? `Deleted note #${id}` : `No note #${id} found`);
  },
};

function help() {
  console.log("Commands: add <text> | list | delete <id>");
  console.log(`(Session locks after ${config.SESSION_TIMEOUT_MINUTES} minutes of inactivity.)`);
}

(Object.hasOwn(commands, command) ? commands[command] : help)();
