/**
  A real number X (|X| < 1) and an integer N (> 0) are given. Compute the expression
  X − X3/3 + X5/5 − … + (−1)N·X2·N+1/(2·N+1).
  The result is an approximate value of atan(X).
 */
export function F(X: number, N: number) {
  let i = 0;
  let XN = X;
  let S = X;
  let SMN = 1;
  for (i = 1; i <= N; i++) {
    XN = XN * X * X;
    SMN = SMN * -1;
    S = S + (SMN * XN) / (i * 2 + 1);
  }
  return parseFloat(S.toFixed(8));
}
