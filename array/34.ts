/**
 Given an array of N real numbers, find the maximum among its local minimums 
 (see the local minimum definition in Array32).
 */
export function F(N: number, A: number[]) {
  let i = 0;
  let minL = 0;
  let B = [];

  if (A[0] < A[1]) {
    B[minL] = A[0];
    minL = minL + 1;
  }

  for (i = 1; i <= N - 2; i++) {
    if (A[i] < A[i - 1] && A[i] < A[i + 1]) {
      B[minL] = A[i];
      minL = minL + 1;
    }
  }

  if (A[N - 1] < A[N - 2]) {
    B[minL] = A[N - 1];
    minL = minL + 1;
  }

  return Math.max(...B);
}
