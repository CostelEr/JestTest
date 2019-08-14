/**
 Given an array of N integers, find the maximal amount of its elements with equal values.
 */
export function F(N: number, A: number[]) {
  let i = 0;
  let k = 1;
  let max = 1;
  A.sort();
  for (i = 1; i <= N - 1; i++) {
    if (A[i] != A[i - 1]) {
      if (max < k) {
        max = k;
      }
      k = 0;
    }
    k = k + 1;
  }
  if (max < k) {
    max = k;
  }
  return max;
}
