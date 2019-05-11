/**
 A real number X and an integer N (> 0) are given. Compute the expression
 1 − X2/(2!) + X4/(4!) − … + (−1)N·X2·N/((2·N)!)
 (N! = 1·2·…·N). The result is an approximate value of cos(X).
 */
export function F(X: number, N: number) {
  let i = 0;
  let NF = 1;
  let XN = 1;
  let S = 1;
  let SMN = 1;
  for (i = 1; i <= 2 * N; i++) {
    NF = NF * i;
    XN = XN * X;
    if (i % 2 == 0) {
      SMN = SMN * -1;
      S = S + (SMN * XN) / NF;
    }
  }
  return parseFloat(S.toFixed(8));
}
