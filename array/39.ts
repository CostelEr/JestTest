/**
 Problema 39
 */
export function F(N: number, A: number[]) {
  let i = 0;
  let k = 0;
  let direction = 0;

  for (i = 1; i <= N - 1; i++) {
    if (A[i] < A[i - 1] && direction == 0) {
      k = k + 1;
      direction = 1;
    }
    if (A[i] > A[i - 1]) {
      direction = 0;
    }
  }

  direction = 0;
  for (i = 1; i <= N - 1; i++) {
    if (A[i] > A[i - 1] && direction == 0) {
      k = k + 1;
      direction = 1;
    }
    if (A[i] < A[i - 1]) {
      direction = 0;
    }
  }

  return k;
}
