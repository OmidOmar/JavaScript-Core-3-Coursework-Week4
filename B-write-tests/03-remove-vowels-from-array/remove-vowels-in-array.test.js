const removeVowels = require("./remove-vowels");
let removeVowelsFromWords = require("./remove-vowels-in-array");

test("remove vowels from all words in array", function () {
  // Arrange
  const input = ["Irina", "Etza", "Daniel"];
  const expected = ["rn", "tz", "Dnl"];

  // Act
  const result = removeVowels(input);
  // Assert
  expect(result).toEqual(expected);
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
