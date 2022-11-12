const verifyPassword = require("./password-validation");

test("validate password if it contains uppercase lowercase and digit(s)", function () {
  // Arrange
  // Act
  // Assert

  expect(verifyPassword("Passw0rd")).toEqual("Password accepted");
  expect(verifyPassword("")).toEqual("Password rejected");
  expect(verifyPassword("pass")).toEqual("Password rejected");
  expect(verifyPassword("Password")).toEqual("Password rejected");
  expect(verifyPassword("12345")).toEqual("Password rejected");
  expect(verifyPassword("12345678")).toEqual("Password rejected");
  expect(verifyPassword("passw87678")).toEqual("Password rejected");
  expect(verifyPassword("PKL98LKJ4B66")).toEqual("Password rejected");
  expect(verifyPassword("SLDKFJDLSKJS")).toEqual("Password rejected");
});
