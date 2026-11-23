// App configuration.
const DEFAULT_SESSION_TIMEOUT_MINUTES = 15;

function getTimeoutMs(minutes = DEFAULT_SESSION_TIMEOUT_MINUTES) {
  return minutes * 60 * 1000;
}

module.exports = {
  // The session locks after this many minutes of inactivity.
  SESSION_TIMEOUT_MINUTES: DEFAULT_SESSION_TIMEOUT_MINUTES,
  MAX_NOTES: 100,
  getTimeoutMs,
};
