/**
 *  The legs a and b of a right triangle are given. Find the hypotenuse c and the perimeter P of the triangle:
 * c = (a2 + b2)1/2,        P = a + b + c.
 */

function C(a, b) {
  return Number(Math.sqrt(a * a + b * b).toFixed(2));
}

function P(a, b) {
  return a + b + C(a, b);
}

module.exports = { C, P };
