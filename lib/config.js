// App configuration.
const SESSION_TIMEOUT_MINUTES = 20;

function isSessionExpired(minutesSinceActivity) {
  return minutesSinceActivity >= SESSION_TIMEOUT_MINUTES;
}

module.exports = {
  // The session locks after this many minutes of inactivity.
  SESSION_TIMEOUT_MINUTES,
  isSessionExpired,
};
