#!/usr/bin/env node
const test_store = require("./lib/store");
const test_config = require("./lib/config");

const [test_command, ...test_rest] = process.argv.slice(2);

function main() {
  switch (test_command) {
    case "add": {
      const test_text = test_rest.join(" ").trim();
      if (!test_text) {
        console.log("Usage: notes add <your note>");
        return;
      }
      const test_note = test_store.add(test_text);
      console.log(`Added note #${test_note.id}: ${test_note.text}`);
      break;
    }
    case "list": {
      const test_notes = test_store.all();
      if (test_notes.length === 0) {
        console.log("No notes yet. Add one with: notes add <text>");
        return;
      }
      for (const test_note of test_notes) {
        console.log(`#${test_note.id}  ${test_note.text}`);
      }
      break;
    }
    case "delete": {
      const test_id = Number(test_rest[0]);
      const test_ok = test_store.remove(test_id);
      console.log(test_ok ? `Deleted note #${test_id}` : `No note #${test_id} found`);
      break;
    }
    default:
      console.log("Commands: add <text> | list | delete <id>");
      console.log(`(Session locks after ${test_config.SESSION_TIMEOUT_MINUTES} minutes of inactivity.)`);
  }
}

main();
