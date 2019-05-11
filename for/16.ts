/**
  A real number A and an integer N (> 0) are given. 
  Using one loop-statement compute and output powers AK 
  for all integer exponents K in the range 1 to N.
 */
export function F(A, N: number) {
  let i = 0;
  let P = 1;
  let X = [];
  for (i = 1; i <= N; i++) {
    P = P * A;
    X[i - 1] = P;
  }
  return X;
}
