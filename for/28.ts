/**
  A real number X (|X| < 1) and an integer N (> 0) are given. Compute the expression
  1 + X/2 − 1·X2/(2·4) + 1·3·X3/(2·4·6) − … +  (−1)N−1·1·3·…·(2·N−3)·XN/(2·4·…·(2·N)).
  The result is an approximate value of the square root of 1 + X.
 */
export function F(X: number, N: number) {
  let i = 0;
  let XN = 1;
  let TR = 1;
  let SMN = -1;
  let FR = 1;
  let S = 1;
  for (i = 1; i <= N; i++) {
    SMN = -SMN;
    XN = XN * X;
    if (i > 1) {
      TR = TR * (2 * i - 3);
    }
    FR = FR * i * 2;
    S = S + (SMN * TR * XN) / FR;
  }
  return parseFloat(S.toFixed(8));
}
