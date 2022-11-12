function verifyPassword(str) {
  return /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9]{8,}$/.test(str)
    ? "Password accepted"
    : "Password rejected";
}

module.exports = verifyPassword;
