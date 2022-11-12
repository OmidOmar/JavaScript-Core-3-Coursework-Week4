const add = (numbers) => {
  //   return numbers
  //     .map((y) => {
  //       let x = y.replace(/"/g, "");
  //       let i = x.indexOf(",");
  //       if (i > -1) return parseInt(x[i - 1]) + parseInt(x[i + 1]);
  //       else return parseInt("0" + x);
  //     })
  //     .reduce((a, b) => a + b);

  return numbers
    .replace(/"/g, "")
    .split(",")
    .reduce((a, b) => {
      a = parseInt(a);
      b = parseInt(b);
      if (a < 0 || b < 0) {
        throw "string contain -ve number";
      } else return a + b;
    });
};
console.log(add(`"1,2,3,4"`));
module.exports = add;
