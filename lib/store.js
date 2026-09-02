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

function normalizeText(text) {
  return text.trim().replace(/\s+/g, " ");
}

function add(text) {
  const data = load();
  const note = { id: data.nextId, text: normalizeText(text) };
  data.notes.push(note);
  data.nextId += 1;
  save(data);
  return note;
}

function remove(id) {
  const data = load();
  const previousCount = data.notes.length;
  data.notes = data.notes.filter((n) => n.id !== id);
  save(data);
  return data.notes.length < previousCount;
}

module.exports = { all, add, remove };
