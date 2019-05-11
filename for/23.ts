/**
 A real number X and an integer N (> 0) are given. Compute the expression
 X − X3/(3!) + X5/(5!) − … + (−1)N·X2·N+1/((2·N+1)!)
 (N! = 1·2·…·N). The result is an approximate value of sin(X).
 */
export function F(X, N: number) {
  let i = 0;
  let NF = 1;
  let XN = 1;
  let S = 0;
  let SMN = -1;
  for (i = 1; i <= 2 * N + 1; i++) {
    NF = NF * i;
    XN = XN * X;
    if (i % 2 == 1) {
      SMN = SMN * -1;
      S = S + (SMN * XN) / NF;
    }
  }
  return parseFloat(S.toFixed(8));
}
