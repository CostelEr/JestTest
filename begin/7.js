/**
 * Given the radius R of a circle, find the length L of the circumference and the area S of the circle:
 *   L = 2·π·R,        S = π·R2.
 * Use 3.14 for a value of π.
 */

function L(R) {
  return Number((2 * 3.14 * R).toFixed(3));
}

function S(R) {
  return Number((3.14 * R * R).toFixed(3));
}
module.exports = { L, S };
