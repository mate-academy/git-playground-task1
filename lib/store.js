const fs = require("fs");
const path = require("path");

const FILE = path.join(__dirname, "..", "notes.json");

function load() {
  try {
    return JSON.parse(fs.readFileSync(FILE, "utf8"));
  } catch {
    return { nextId: 1, notes: [] };
  }
}

function save(data) {
  fs.writeFileSync(FILE, JSON.stringify(data, null, 2));
}

function all() {
  return load().notes;
}

function add(text) {
  const db = load();
  const note = { id: db.nextId, text };
  db.notes.push(note);
  db.nextId += 1;
  save(db);
  return note;
}

function remove(id) {
  const db = load();
  const before = db.notes.length;
  db.notes = db.notes.filter((n) => n.id !== id);
  save(db);
  return db.notes.length < before;
}

function count() {
  return load().notes.length;
}

module.exports = { all, add, remove, count };
