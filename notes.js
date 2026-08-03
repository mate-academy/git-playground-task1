#!/usr/bin/env node
const store = require("./lib/store");
const config = require("./lib/config");
const { isPalindrome } = require("./lib/palindrome");

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
    case "delete-palindromes": {
      const palindromes = store.all().filter((note) => isPalindrome(note.text));
      for (const note of palindromes) {
        store.remove(note.id);
      }
      console.log(
        palindromes.length === 0
          ? "No palindrome notes found"
          : `Deleted ${palindromes.length} palindrome note(s): ${palindromes.map((n) => `#${n.id}`).join(", ")}`
      );
      break;
    }
    default:
      console.log("Commands: add <text> | list | delete <id> | delete-palindromes");
      console.log(`(Session locks after ${config.SESSION_TIMEOUT_MINUTES} minutes of inactivity.)`);
  }
}

main();
