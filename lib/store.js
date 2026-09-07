const fs = require("fs");
const path = require("path");

const FILE = path.join(__dirname, "..", "notes.json");

/**
 * Loads the notes data from disk, or returns an empty store.
 */
function load() {
  try {
    return JSON.parse(fs.readFileSync(FILE, "utf8"));
  } catch {
    return { nextId: 1, notes: [] };
  }
}

/**
 * Writes the notes data to disk.
 */
function save(data) {
  fs.writeFileSync(FILE, JSON.stringify(data, null, 2));
}

/**
 * Returns all saved notes.
 */
function all() {
  return load().notes;
}

/**
 * Creates and saves a new note.
 */
function add(text) {
  const data = load();
  const note = { id: data.nextId, text };
  data.notes.push(note);
  data.nextId += 1;
  save(data);
  return note;
}

/**
 * Removes a note by id and reports whether one was deleted.
 */
function remove(id) {
  const data = load();
  const before = data.notes.length;
  data.notes = data.notes.filter((n) => n.id !== id);
  save(data);
  return data.notes.length < before;
}

module.exports = { all, add, remove };
