/**
 Given an array A of N real numbers, find the maximum 
 among elements with odd order numbers: A1, A3, A5, … .
 */
export function F(N: number, A: number[]) {
  let i = 0;
  let max = A[0];
  for (i = 2; i <= N - 1; i += 2) {
    if (A[i] > max) {
      max = A[i];
    }
  }

  return max;
}
