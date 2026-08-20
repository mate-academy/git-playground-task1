// App configuration.

module.exports = {
  // The session locks after this many minutes of inactivity.
  SESSION_TIMEOUT_MINUTES: 20,

  // Converts the timeout into milliseconds for use with setTimeout/setInterval.
  getSessionTimeoutMs() {
    return this.SESSION_TIMEOUT_MINUTES * 60 * 1000;
  },
};