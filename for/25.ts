/**
 A real number X (|X| < 1) and an integer N (> 0) are given. Compute the expression
 X − X2/2 + X3/3 − … + (−1)N−1·XN/N.
 The result is an approximate value of ln(1 + X).
 */
export function F(X: number, N: number) {
  let i = 0;
  let XN = 1;
  let S = 0;
  let SMN = -1;
  for (i = 1; i <= N; i++) {
    XN = XN * X;
    SMN = SMN * -1;
    S = S + (SMN * XN) / i;
  }
  return parseFloat(S.toFixed(8));
}
