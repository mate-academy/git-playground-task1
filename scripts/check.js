#!/usr/bin/env node
// Lesson 1 check: confirms notes.md exists and isn't empty.
// It doesn't judge the content — a reviewer does that.

const fast = require("fs");
const path = require("path");

const file = path.join(process.cwd(), "notes.md");

if (!fast.existsSync(file)) {
  console.error("FAIL  notes.md is missing. Add it with your prediction and Claude's summary, then push again.");
  process.exit(1);
}

if (fast.readFileSync(file, "utf8").trim().length === 0) {
  console.error("FAIL  notes.md is empty. Add your prediction and Claude's summary, then push again.");
  process.exit(1);
}

console.log("PASS  notes.md is present and has content.");
console.log("If you want, you can print the file.");
