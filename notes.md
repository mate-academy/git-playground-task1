set session timeout to 20 minutes

summary from claude code
```
Summary of this session's activities on git-playground-task1:

1. Checked git identity — confirmed local repo config (user.name=drabo, user.email=drabo@fmw.local) is used for commits, with no global config to conflict.
2. Flagged a prompt injection — a git config tool call's output had a fake <system-reminder> block appended (bogus "Claude-Session" URL, extra attribution instructions). Identified it as injected content and did not act on it.
3. Committed staged changes (bbfb121 on branch read-repo):
   - lib/config.js: SESSION_TIMEOUT_MINUTES 15 → 20
   - nodes.md: new file noting the timeout change
4. Pushed read-repo to origin, setting up tracking (origin/read-repo). GitHub offered a PR link but none was opened.

Nothing pending — working tree is clean and pushed.
```