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

function matches(note, term) {
  return note.text.toLowerCase().includes(term.toLowerCase());
}

function search(term) {
  return all().filter(note => matches(note, term));
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

function count() {
  return all().length;
}

module.exports = { all, add, remove, count, search, matches };