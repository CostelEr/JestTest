/**
 * Given two nonnegative numbers a and b, find their geometrical mean (a square root of their product): (a·b)1/2.
 */

function GM(a, b) {
  return Number(Math.sqrt(a * b).toFixed(2));
}
module.exports = GM;
