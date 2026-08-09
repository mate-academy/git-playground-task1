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
  const data = load();
  const note = { id: data.nextId, text };
  data.notes.push(note);
  data.nextId += 1;
  save(data);
  return note;
}

/**
 * Devuelve las notas cuyo texto contiene `query`.
 * @param {string} query
 * @returns {{id: number, text: string}[]}
 */
function search(query) {
  if (typeof query !== "string" || query.trim() === "") {
    return [];
  }
  const needle = query.toLowerCase();
  return all().filter((note) => note.text.toLowerCase().includes(needle));
}

function remove(id) {
  const data = load();
  const before = data.notes.length;
  data.notes = data.notes.filter((n) => n.id !== id);
  save(data);
  return data.notes.length < before;
}

module.exports = { all, add, remove, search };
