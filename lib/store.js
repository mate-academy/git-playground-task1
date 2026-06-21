const fs = require("fs");
const path = require("path");

const NOTES_FILE_PATH = path.join(__dirname, "..", "notes.json");

function load() {
  try {
    return JSON.parse(fs.readFileSync(NOTES_FILE_PATH, "utf8"));
  } catch {
    return { nextId: 1, notes: [] };
  }
}

function save(data) {
  fs.writeFileSync(NOTES_FILE_PATH, JSON.stringify(data, null, 2));
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
  const originalCount = data.notes.length;
  data.notes = data.notes.filter((note) => note.id !== id);
  save(data);
  return data.notes.length < originalCount;
}

module.exports = { all, add, remove };
