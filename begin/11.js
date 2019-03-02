/**
 *  Two nonzero numbers are given. Find the sum, the difference, the product,
 *  and the quotient of their absolute values.
 */

function Sum(a, b) {
  return Number((Math.abs(a) + Math.abs(b)).toFixed(2));
}
function Dif(a, b) {
  return Number((Math.abs(a) - Math.abs(b)).toFixed(2));
}
function Pro(a, b) {
  return Number((Math.abs(a) * Math.abs(b)).toFixed(2));
}
function Quo(a, b) {
  return Number((Math.abs(a) / Math.abs(b)).toFixed(2));
}
module.exports = { Sum, Dif, Pro, Quo };
