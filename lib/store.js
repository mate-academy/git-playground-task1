const fs = require("fs");
const path = require("path");

const FILE = path.join(__dirname, "..", "notes.json");

function load() {
  let raw;
  try {
    raw = fs.readFileSync(FILE, "utf8");
  } catch (err) {
    if (err.code === "ENOENT") return { nextId: 1, notes: [] };
    throw err;
  }

  try {
    return JSON.parse(raw);
  } catch {
    console.error(`${FILE} is not valid JSON. Fix or remove it before continuing.`);
    process.exit(1);
  }
}

function save(data) {
  fs.writeFileSync(FILE, JSON.stringify(data, null, 2));
}

function all() {
  return load().notes;
}

function add(text) {
  const data = load();
  const note = { id: data.nextId, text };
  data.notes.push(note);
  data.nextId += 1;
  save(data);
  return note;
}

function remove(id) {
  const data = load();
  const before = data.notes.length;
  data.notes = data.notes.filter((n) => n.id !== id);
  save(data);
  return data.notes.length < before;
}

module.exports = { all, add, remove };
