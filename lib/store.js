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

function save(notesData) {
  fs.writeFileSync(FILE, JSON.stringify(notesData, null, 2));
}

function all() {
  return load().notes;
}

function add(text) {
  const notesData = load();
  const note = { id: notesData.nextId, text };
  notesData.notes.push(note);
  notesData.nextId += 1;
  save(notesData);
  return note;
}

function remove(id) {
  const notesData = load();
  const before = notesData.notes.length;
  notesData.notes = notesData.notes.filter((n) => n.id !== id);
  save(notesData);
  return notesData.notes.length < before;
}

module.exports = { all, add, remove };
