/**
 Given an independent variable x, find the value of a function y = 4(x−3)6 − 7(x−3)3 + 2.
 */
function Y(x) {
  a = 4 * Math.pow(x - 3, 6) - 7 * Math.pow(x - 3, 3) + 2;
  return Number(a.toFixed(2));
}
module.exports = { Y };
