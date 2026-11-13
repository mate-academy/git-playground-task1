#!/usr/bin/env node
const os = require("os");
const store = require("./lib/store");
const config = require("./lib/config");

const [command, ...rest] = process.argv.slice(2);

function main() {
  switch (command) {
    case "add": {
      const args = [...rest];
      let user = os.userInfo().username;
      const flag = args.indexOf("--user");
      if (flag !== -1) {
        user = (args[flag + 1] || "").trim();
        args.splice(flag, 2);
      }
      const text = args.join(" ").trim();
      if (!text || !user) {
        console.log("Usage: notes add [--user <name>] <your note>");
        return;
      }
      const note = store.add(text, user);
      console.log(`Added note #${note.id} by ${note.user}: ${note.text}`);
      break;
    }
    case "list": {
      const notes = store.all();
      if (notes.length === 0) {
        console.log("No notes yet. Add one with: notes add <text>");
        return;
      }
      for (const note of notes) {
        const by = note.user ? ` (${note.user})` : "";
        console.log(`#${note.id}${by}  ${note.text}`);
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
      console.log("Commands: add [--user <name>] <text> | list | delete <id>");
      console.log(`(Session locks after ${config.SESSION_EXPIRY_MINS} minutes of inactivity.)`);
  }
}

main();
