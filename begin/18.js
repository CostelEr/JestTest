/**
 Three points A, B, C are given on the real axis, the point C is located between the points A and B. 
 Find the product of the length of AC and the length of BC.
 */

function PROD(A, B, C) {
  let AC = Number(Math.abs(C - A).toFixed(2));
  let BC = Number(Math.abs(B - C).toFixed(2));
  return Number((AC * BC).toFixed(2));
}
module.exports = { PROD };
