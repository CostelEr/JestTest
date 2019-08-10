/**
 Given an array of N real numbers, find two adjacent elements with the maximal sum 
 of values and output these elements in ascending order of its indices.
 */
export function F(N: number, A: number[]) {
  let i = 0;
  let k = 1;
  let max = A[k] + A[k - 1];

  for (i = 2; i <= N - 1; i++) {
    if (A[i] + A[i - 1] > max) {
      max = A[i] + A[i - 1];
      k = i;
    }
  }

  return [A[k - 1], A[k]];
}
