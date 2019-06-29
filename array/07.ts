/**
 Given an array of N real numbers, output its elements in inverse order.
 */
export function F(N: number, A: array) {
  let i = 0;
  let j = N;
  let B = [];
  for (i = 0; i <= N - 1; i++) {
    j = j - 1;
    B[j] = A[i];
  }
  return B;
}
