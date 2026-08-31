// App configuration.
module.exports = {
  // The session locks after this many minutes of inactivity.
  SESSION_TIMEOUT_MINUTES: 15,
  getTimeoutSeconds() {
    return this.SESSION_TIMEOUT_MINUTES * 60;
  },
};
