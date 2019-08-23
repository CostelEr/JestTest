/**
 Array 67
 */
export function F(N: number, A: number[]) {
  let i = 0;
  let p = 0;

  for (i = N - 1; i >= 0; i--) {
    if (A[i] % 2 != 0) {
      p = A[i];
      i = -1;
    }
  }
  for (i = 0; i <= N - 1; i++) {
    if (A[i] % 2 != 0) {
      A[i] = A[i] + p;
    }
  }

  return A;
}
