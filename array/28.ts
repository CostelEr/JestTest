/**
 Problema 27 
 */
export function F(N: number, A: number[]) {
  let i = 0;
  let min = A[1];
  for (i = 1; i <= N - 1; i += 2) {
    if (A[i] < min) {
      min = A[i];
    }
  }

  return min;
}
