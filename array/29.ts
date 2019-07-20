/**
 Problema 29 
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
