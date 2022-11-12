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

module.exports = sales;
