/**
 Problema 40
 */
export function F(R: number, N: number, A: number[]) {
  let i = 0;
  let min = A[0];

  for (i = 1; i <= N - 1; i++) {
    if (Math.abs(A[i] - R) < Math.abs(min - R)) {
      min = A[i];
    }
  }

  return min;
}
