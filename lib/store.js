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

function save(state) {
  fs.writeFileSync(FILE, JSON.stringify(state, null, 2));
}

function all() {
  return load().notes;
}

function add(text) {
  const state = load();
  const note = { id: state.nextId, text };
  state.notes.push(note);
  state.nextId += 1;
  save(state);
  return note;
}

function remove(id) {
  const state = load();
  const beforeCount = state.notes.length;
  state.notes = state.notes.filter((n) => n.id !== id);
  save(state);
  return state.notes.length < beforeCount;
}

module.exports = { all, add, remove };
