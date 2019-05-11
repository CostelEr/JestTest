/**
 A real number X and an integer N (> 0) are given. Compute the expression
 1 + X + X2/(2!) + … + XN/(N!)
 (N! = 1·2·…·N). The result is an approximate value of exp(X).
 */
export function F(X, N: number) {
  let i = 0;
  let NF = 1;
  let XN = 1;
  let S = 1;
  for (i = 1; i <= N; i++) {
    NF = NF * i;
    XN = XN * X;
    S = S + XN / NF;
  }
  return parseFloat(S.toFixed(8));
}
