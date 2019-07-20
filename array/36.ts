/**
 Problema 36
 */
export function F(N: number, A: number[]) {
  let i = 0;
  let k = 0;
  let B = [];
  B[0] = 0;

  for (i = 1; i <= N - 2; i++) {
    if (
      !(A[i] > A[i - 1] && A[i] > A[i + 1]) &&
      !(A[i] < A[i - 1] && A[i] < A[i + 1])
    ) {
      B[k] = A[i];
      k = k + 1;
    }
  }

  return Math.max(...B);
}
