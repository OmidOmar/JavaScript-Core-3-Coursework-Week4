function sales(carsSold) {
  const res = {};
  carsSold.forEach((item) => {
    if (res[item.make]) {
      res[item.make] += item.price;
    } else {
      res[item.make] = item.price;
    }
  });
  return res;
}

console.log(
  sales([
    { make: "Ford", model: "Fiesta", colour: "Red", price: 5999 },
    { make: "Land Rover", model: "Defender", colour: "Muddy", price: 12000 },
    { make: "Toyota", model: "Prius", colour: "Silver", price: 6500 },
    { make: "Honda", model: "Civic", colour: "Yellow", price: 8000 },
    { make: "Ford", model: "Fiesta", colour: "Red", price: 15000 },
    { make: "Land Rover", model: "Discovery", colour: "Blue", price: 9000 },
    { make: "Ford", model: "Fiesta", colour: "Green", price: 2000 },
  ])
);

module.exports = sales;
