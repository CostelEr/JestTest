/**
  X kg of chocolates cost A euro and Y kg of sugar candies cost B euro (positive numbers X, A, Y, B are given). 
  Find the cost of 1 kg of the chocolates and the cost of 1 kg of the sugar candies. 
  Also determine how many times the chocolates are more expensive than the sugar candies.
 */
function Choc(x, a, y, b) {
  let z = [];
  z[0] = Number((a / x).toFixed(2));
  z[1] = Number((b / y).toFixed(2));
  z[2] = Number((z[0] / z[1]).toFixed(2));
  return z;
}
module.exports = { Choc };
