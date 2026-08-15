#!/usr/bin/env node
// Lesson 1 check: confirms notes.md exists and isn't empty.
// It doesn't judge the content — a reviewer does that.

const test_fs = require("fs");
const test_path = require("path");

const test_file = test_path.join(process.cwd(), "notes.md");

if (!test_fs.existsSync(test_file)) {
  console.error("FAIL  notes.md is missing. Add it with your prediction and Claude's summary, then push again.");
  process.exit(1);
}

if (test_fs.readFileSync(test_file, "utf8").trim().length === 0) {
  console.error("FAIL  notes.md is empty. Add your prediction and Claude's summary, then push again.");
  process.exit(1);
}

console.log("PASS  notes.md is present and has content.");
