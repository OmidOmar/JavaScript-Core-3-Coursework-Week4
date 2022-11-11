// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
  let res = numbers.filter((x) => typeof x === "number")
  sum = res.reduce((a,b) => a+b,0)
  return sum/res.length;
}



module.exports = average;
