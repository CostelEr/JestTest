/**
 Array51. Two arrays A and B of N real numbers are given. 
 Exchange the contents of the given arrays and output elements 
 of the changed array A and then output elements of the changed array B.
 */
export function F(N: number, A: number[], B: number[]) {
  let i = 0;
  let k = 0;
  for (i = 0; i <= N - 1; i++) {
    /* k = A[i];
    A[i] = B[i];
    B[i] = k; */
    [A[i], B[i]] = [B[i], A[i]];
  }

  return [A, B];
}
