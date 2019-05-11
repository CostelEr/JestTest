/**
 Given a real number A and an integer N (> 0), 
 find A raised to the power N (i. e., the product of N values of A):
 AN = A·A· … ·A.
 */
export function F(A, N: number) {
  let i = 0;
  let P = 1;
  for (i = 1; i <= N; i++) {
    P = P * A;
  }
  return P;
}
