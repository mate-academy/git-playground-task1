const fs = require("fs");
const path = require("path");

const FILE = path.join(__dirname, "..", "notes.json");
const FORMAT = "utf8"

function load() {
  try {
    return JSON.parse(fs.readFileSync(FILE, FORMAT));
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

function update(id, text) {
  const data = load();
  const note = data.notes.find((n) => n.id === id);
  if (!note) {
    return null;
  }
  note.text = text;
  save(data);
  return note;
}

module.exports = { all, add, remove, update };
