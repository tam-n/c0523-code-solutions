const prices = [42.42, 10, 28.2234, 3.2, 5, 12];

const priceObj = prices.map((element) => {
  const obj = {};
  obj.price = element;
  obj.salePrice = element / 2;
  return obj;
});
console.log('Price Objects:', priceObj);

const formattedPrice = prices.map((element) => `$${element}`);
console.log('Formatted Price:', formattedPrice);
