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
  const storeData = load();
  const newNote = { id: storeData.nextId, text };
  storeData.notes.push(newNote);
  storeData.nextId += 1;
  save(storeData);
  return newNote;
}

function remove(id) {
  const data = load();
  const before = data.notes.length;
  data.notes = data.notes.filter((n) => n.id !== id);
  save(data);
  return data.notes.length < before;
}

function removeAll() {
  const data = load();
  const before = data.notes.length;
  data.notes = [];
  save(data);
  return 0;
}

module.exports = { all, add, remove };
