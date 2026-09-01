const fs = require("fs");
const path = require("path");

const FILE = path.join(__dirname, "..", "notes.json");

function load() {
  try {
    return JSON.parse(fs.readFileSync(FILE, "utf8"));
  } catch (err) {
    if (err.code !== "ENOENT") {
      console.error(`Warning: could not read ${FILE} (${err.message}). Starting from an empty note list.`);
    }
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
  const numericId = Number(id);
  const countBefore = data.notes.length;
  data.notes = data.notes.filter((n) => n.id !== numericId);
  save(data);
  return data.notes.length < countBefore;
}

function search(term) {
  if (!term) return [];
  const needle = term.toLowerCase();
  return all().filter((n) => n.text.toLowerCase().includes(needle));
}

module.exports = { all, add, remove, search };
