/**
 Given an array of N integers whose values are in ascending or in descending order, 
 find the amount of its elements with distinct values.
 */
export function F(N: number, A: number[]) {
  let i = 0;
  let k = N;

  for (i = 1; i <= N - 1; i++) {
    if (A[i] == A[i - 1]) {
      k = k - 1;
    }
  }

  return k;
}
