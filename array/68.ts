/**
 Array 68
 */
export function F(N: number, A: number[]) {
  let i = 0;
  let max = A[0];
  let min = A[0];
  let imax = 0;
  let imin = 0;

  for (i = 1; i <= N - 1; i++) {
    if (A[i] < min) {
      min = A[i];
      imin = i;
    }
    if (A[i] > max) {
      max = A[i];
      imax = i;
    }
  }
  [A[imax], A[imin]] = [A[imin], A[imax]];
  return A;
}
