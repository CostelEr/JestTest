/**
 Three points A, B, C are given on the real axis. 
 Find the length of AC, the length of BC, and the sum of these lengths.
 */

function AC(A, B, C) {
  return Number(Math.abs(A - C).toFixed(2));
}
function BC(A, B, C) {
  return Number(Math.abs(B - C).toFixed(2));
}

function SUM(A, B, C) {
  return Number((AC(A, B, C) + BC(A, B, C)).toFixed(2));
}

module.exports = { AC, BC, SUM };
