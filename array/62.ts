/**
 Array 62
 */
export function F(N: number, A: number[]) {
  let B = [];
  let C = [];
  let i = 0;
  let p = 0;
  let n = 0;

  for (i = 0; i <= N - 1; i++) {
    if (A[i] > 0) {
      B[p] = A[i];
      p = p + 1;
    }
    if (A[i] < 0) {
      C[n] = A[i];
      n = n + 1;
    }
  }

  return [p, B, n, C];
}
