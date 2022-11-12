const add = (numbers) => {
  return numbers
    .replace(/"/g, "")
    .split(",")
    .map((x) => {
      return x === "" ? 0 : parseInt(x);
    })
    .reduce((a, b) => {
      if (a < 0 || b < 0) {
        throw "string contain -ve number";
      } else return a + b;
    });
};
console.log(add(`"4"`));
module.exports = add;
