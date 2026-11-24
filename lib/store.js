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

//retrieve all the notes
function all() {
  return load().notes;
}

//save a new note
function add(text) {
  const data = load();
  const note = { id: data.nextId, text };
  data.notes.push(note);
  data.nextId += 1;
  save(data);
  return note;
}

//remove a note
function remove(id) {
  const data = load();
  const countBefore = data.notes.length;
  data.notes = data.notes.filter((n) => n.id !== id);
  save(data);
  return data.notes.length < countBefore;
}

//retrieve number of notes
function count() {
  return load().notes.length;
}

module.exports = { all, add, remove, count };
