const fs = require("fs");
const path = require("path");

const FILE = path.join(__dirname, "..", "notes.json");

function load() {
  try {
    return JSON.parse(fs.readFileSync(FILE, "utf8"));
  } catch (err) {
    // Only a missing file means "no notes yet"; anything else (e.g. corrupt JSON)
    // must not be silently replaced by an empty store on the next save.
    if (err.code === "ENOENT") {
      return { nextId: 1, notes: [] };
    }
    throw err;
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
  const removed = data.notes.length < before;
  if (removed) {
    save(data);
  }
  return removed;
}

function clear() {
  const data = load();
  const count = data.notes.length;
  data.notes = [];
  save(data);
  return count;
}

module.exports = { all, add, remove, clear };
