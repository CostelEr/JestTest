/**
  A real number X (|X| < 1) and an integer N (> 0) are given. Compute the expression
 X + 1·X3/(2·3) + 1·3·X5/(2·4·5) + … + + 1·3·…·(2·N−1)·X2·N+1/(2·4·…·(2·N)·(2·N+1)).
 The result is an approximate value of asin(X).
 */
export function F(X: number, N: number) {
  let i = 0;
  let XN = X;
  let S = X;
  let NF = 1;
  let T = 1;
  for (i = 1; i <= N; i++) {
    XN = XN * X * X;
    NF = NF * 2 * i;
    T = T * (2 * i - 1);
    S = S + (T * XN) / (NF * (2 * i + 1));
  }
  return parseFloat(S.toFixed(8));
}
