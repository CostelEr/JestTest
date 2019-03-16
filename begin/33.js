/**
  X kg of sweet cost A euro. Find the cost of 1 kg and Y kg of the sweets (positive numbers X, A, Y are given).
 */
function Cost(x, a, y) {
  let z = [Number((a / x).toFixed(2)), Number(((a / x) * y).toFixed(2))];
  return z;
}
module.exports = { Cost };
