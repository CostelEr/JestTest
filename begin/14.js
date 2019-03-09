/**
 * Given the length L of a circumference, find the radius R and the area S of the circle.
 * Take into account that L = 2·π·R,    S = π·R2. Use 3.14 for a value of π.
 */

function R(L) {
  return Number((L / (2 * 3.14)).toFixed(2));
}

function S(L) {
  return Number((3.14 * (L / (2 * 3.14)) * (L / (2 * 3.14))).toFixed(2));
}

module.exports = { R, S };
