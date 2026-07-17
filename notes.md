Added a comment to notes.js at the beginning

Added a line at the end of README.md



README.md — added a trailing line My comment after the exercise instructions. Harmless.

  notes.js — added # my new comment1 as the first line, pushing #!/usr/bin/env node to line 2. This looks unintended and
  will break the file:
  - #! only works as a shebang when it's the very first line — moving it to line 2 breaks direct execution (./notes.js)
  and could break npm bin/package invocation.
  - # is not a JS comment character (it's only valid as a private-class-field sigil in certain syntax positions). A bare
  # my new comment1 line will very likely cause a SyntaxError when Node parses the file. If you meant a JS comment, it
  should be //.

  notes.md (untracked, new) — already contains two lines of content ("Added a comment to notes.js at the beginning" /
  "Added a line at the end of README.md"). Since you haven't written anything into it yet, this looks like
  leftover/seeded content from a prior run of this exercise rather than something you just created — worth checking it's
  not stale before committing.

  Flagged issue: the # comment in notes.js is almost certainly a mistake — recommend changing it to // and confirming
  it's still the first line only if intentionally not a shebang-breaking edit.