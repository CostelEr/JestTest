/**
 Problema 35
 */
export function F(N: number, A: number[]) {
  let i = 0;
  let maxL = 0;
  let B = [];

  if (A[0] > A[1]) {
    B[maxL] = A[0];
    maxL = maxL + 1;
  }

  for (i = 1; i <= N - 2; i++) {
    if (A[i] > A[i - 1] && A[i] > A[i + 1]) {
      B[maxL] = A[i];
      maxL = maxL + 1;
    }
  }

  if (A[N - 1] > A[N - 2]) {
    B[maxL] = A[N - 1];
  }

  return Math.min(...B);
}
