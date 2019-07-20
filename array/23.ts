/**
 Problema 23
 */
export function F(N: number, A: array, K: number, L: number) {
  let i = K;
  let sum = 0;
  for (i = 0; i < K - 1; i++) {
    sum = sum + A[i];
  }
  for (i = L; i < N; i++) {
    sum = sum + A[i];
  }
  sum = parseFloat((sum / (N - (L - K) - 1)).toFixed(2));
  return sum;
}
