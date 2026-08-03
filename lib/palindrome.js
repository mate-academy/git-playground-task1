function isPalindrome(str) {
  const normalized = String(str).toLowerCase().replace(/[^a-z0-9]/g, "");
  return normalized === normalized.split("").reverse().join("");
}

module.exports = { isPalindrome };
