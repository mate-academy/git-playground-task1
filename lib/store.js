const test_fs = require("fs");
const test_path = require("path");

const test_FILE = test_path.join(__dirname, "..", "notes.json");

function load() {
  try {
    return JSON.parse(test_fs.readFileSync(test_FILE, "utf8"));
  } catch {
    return { nextId: 1, notes: [] };
  }
}

function save(test_data) {
  test_fs.writeFileSync(test_FILE, JSON.stringify(test_data, null, 2));
}

function all() {
  return load().notes;
}

function add(test_text) {
  const test_data = load();
  const test_note = { id: test_data.nextId, text: test_text, createdAt: new Date().toISOString() };
  test_data.notes.push(test_note);
  test_data.nextId += 1;
  save(test_data);
  return test_note;
}

function remove(test_id) {
  const test_data = load();
  const test_before = test_data.notes.length;
  test_data.notes = test_data.notes.filter((n) => n.id !== test_id);
  save(test_data);
  return test_data.notes.length < test_before;
}

module.exports = { all, add, remove };
