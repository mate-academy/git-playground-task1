// App configuration.
module.exports = {
  // The session locks after this many minutes of inactivity.
  SESSION_TIMEOUT_MINUTES: 30,
  // Returns a random integer between min and max (inclusive).
  randomInt: (min, max) => Math.floor(Math.random() * (max - min + 1)) + min,
};
