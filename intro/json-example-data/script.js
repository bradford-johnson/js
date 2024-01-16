const fs = require("fs");

fs.readFile("intro/json-example-data/fake-data.json", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading JSON file:", err);
    return;
  }

  const jsonArray = JSON.parse(data);

  console.log(jsonArray);

  const orderCount = jsonArray.length;

  console.log(orderCount);

  // get order total by sum of price, but price has dollar sign

  const orderTotal = jsonArray.reduce((total, order) => {
    return total + parseFloat(order.price.replace("$", ""));
  }, 0);

  console.log(orderTotal);
});
