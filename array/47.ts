/**
 Given an array of N integers, find the amount of its elements with distinct values.
 */
export function F(N: number, A: number[]) {
  let i = 0;
  let k = N;
  A.sort();
  for (i = 1; i <= N - 1; i++) {
    if (A[i] == A[i - 1]) {
      k = k - 1;
    }
  }

  return k;
}
