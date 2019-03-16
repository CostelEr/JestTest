/**
  Solve a linear equation A·x + B = 0 with given coefficients A and B (A is not equal to 0).
 */
export function X(A, B: number) {
  return parseFloat((-B / A).toFixed(2));
}
