const fs = require("fs");
const path = require("path");

const FILE = path.join(__dirname, "..", "notes.json");

function load() {
  let text;
  try {
    text = fs.readFileSync(FILE, "utf8");
  } catch (err) {
    if (err.code === "ENOENT") return { nextId: 1, notes: [] };
    throw err;
  }
  return JSON.parse(text);
}

function store(data) {
  const tmp = `${FILE}.tmp`;
  fs.writeFileSync(tmp, JSON.stringify(data, null, 2));
  fs.renameSync(tmp, FILE);
}

function all() {
  return load().notes;
}

function add(text) {
  const data = load();
  const note = { id: data.nextId, text };
  data.notes.push(note);
  data.nextId += 1;
  store(data);
  return note;
}

function remove(id) {
  const data = load();
  const before = data.notes.length;
  data.notes = data.notes.filter((n) => n.id !== id);
  store(data);
  return data.notes.length < before;
}

module.exports = { all, add, remove };
