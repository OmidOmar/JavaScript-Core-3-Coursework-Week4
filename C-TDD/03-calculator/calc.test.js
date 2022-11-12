const add = require("./calc");

test("validate password if it contains uppercase lowercase and digit(s)", function () {
  // Arrange
  // Act
  // Assert

  expect(add(`""`)).toEqual(0);
  expect(add(`"5"`)).toEqual(5);
  expect(add(`"3,6"`)).toEqual(14);
});
