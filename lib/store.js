const fs = require("fs")
const path = require("path")

const FILE = path.join(__dirname, "..", "my_notes.json")

function get() {
  try {
    return JSON.parse(fs.readFileSync(FILE, "utf8"))
  } catch {
    return { nextId: 1, notes: [] }
  }
}

function save(data) {
  fs.writeFileSync(FILE, JSON.stringify(data, null, 2))
}

function all() {
  return get().notes
}

function add(text) {
  const data = get()
  const note = { id: data.nextId, text }
  data.notes.push(note)
  data.nextId += 1
  save(data)
  return note
}

function remove(id) {
  const data = get()
  const before = data.notes.length
  data.notes = data.notes.filter(n => n.id !== id)
  save(data)
  return data.notes.length < before
}

module.exports = { all, add, remove }
