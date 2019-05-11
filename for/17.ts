/**
  A real number A and an integer N (> 0) are given. 
  Using one loop-statement compute the sum
  1 + A + A2 + A3 + … + AN.
 */
export function F(A, N: number) {
  let i = 0;
  let AN = 1;
  let S = 1;
  for (i = 1; i <= N; i++) {
    AN = AN * A;
    S = S + AN;
  }
  return S;
}
