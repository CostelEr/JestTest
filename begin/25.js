/**
 Given an independent variable x, find the value of a function y = 3x6 − 6x2 − 7.
 */
function Y(x) {
  return Number((3 * Math.pow(x, 6) - 6 * x * x - 7).toFixed(2));
}
module.exports = { Y };
