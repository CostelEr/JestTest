/**
 * Given the radiuses R1 and R2 of two concentric circles (R1 > R2), find the areas S1 and S2 of the circles and the area S3 of the ring bounded by the circles:
 * S1 = π·(R1)2,        S2 = π·(R2)2,        S3 = S1 − S2.
 * Use 3.14 for a value of π.
 */

function S1(R1) {
  return Number((3.14 * R1 * R1).toFixed(2));
}

function S2(R2) {
  return Number((3.14 * R2 * R2).toFixed(2));
}

function S3(R1, R2) {
  return Number((S1(R1) - S2(R2)).toFixed(2));
}

module.exports = { S1, S2, S3 };
