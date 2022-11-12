let convertToNewRoman = require("./convert-to-new-roman");

test("returns I if passed 1 as an argument", function () {
  // Arrange
  // Act
  // Assert

  expect(convertToNewRoman(4)).toEqual("IV");
  expect(convertToNewRoman(44)).toEqual("XLIV");
  expect(convertToNewRoman(99)).toEqual("XCIX");
  expect(convertToNewRoman(400)).toEqual("CD");
  expect(convertToNewRoman(944)).toEqual("CMXLIV");
});
