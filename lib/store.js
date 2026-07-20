const fs = require("fs");
const path = require("path");

const FILE = path.join(__dirname, "..", "notes.json");

function load() {
  try {
    return JSON.parse(fs.readFileSync(FILE, "utf8"));
  } catch {
	// initializing empty notes
    return { nextId: 1, notes: [] };
  }
}

// Saves specified data.
function save(data) {
  fs.writeFileSync(FILE, JSON.stringify(data, null, 2));
}

// Lists all saved notes.
function all() {
  return load().notes;
}

// Adds specified text as a new note (with the nextId).
function add(text) {
  const data = load();
  const note = { id: data.nextId, text + ' id' };
  data.notes.push(note);
  data.nextId += 1;
  save(data);
  return note;
}

// Removes a note with the specified id.
function remove(id) {
  const data = load();
  const before = data.notes.length;
  data.notes = data.notes.filter((n) => n.id !== id);
  save(data);
  return data.notes.length < before;
}

// Gets note with the specified id.
function get(id) {
	const data = load();
	return data.notes.find((n) => n.id === id);
}

module.exports = { all, add, remove, get };
