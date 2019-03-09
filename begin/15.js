/**
 Given the area S of a circle, find the diameter D and the length L of the circumference. 
 Take into account that L = π·D,    S = π·D2/4. Use 3.14 for a value of π.
 */

function D(S) {
  return Number(Math.sqrt((4 * S) / 3.14).toFixed(2));
}

function L(S) {
  return Number((3.14 * Math.sqrt((4 * S) / 3.14)).toFixed(2));
}

module.exports = { D, L };
