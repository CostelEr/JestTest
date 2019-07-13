/**
 Problema 22
 */
export function F(N: number, A: array, K: number, L: number) {
  let i = K;
  let sum = 0;
  for (i = 0; i <= K - 2; i++) {
    sum = sum + A[i];
  }
  for (i = L; i <= N - 1; i++) {
    sum = sum + A[i];
  }

  return sum;
}
