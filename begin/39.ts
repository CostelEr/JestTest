/**
  Solve a quadratic equation A·x2 + B·x + C = 0 with given coefficients A, B, C 
  (A and the discriminant of the equation are positive). Output the smaller equation 
  root and then the larger one. Roots of the quadratic equation may be found by formula
 x1, 2 = (−B ± (D)1/2)/(2·A), where D = B2 − 4·A·C is a discriminant.
 */
export function X(A, B, C: number) {
  let z = [];
  z[0] = parseFloat((-B - Math.sqrt(B * B - 4 * A * C)) / (2 * A).toFixed(2));
  z[1] = parseFloat((-B + Math.sqrt(B * B - 4 * A * C)) / (2 * A).toFixed(2));
  return z;
}
