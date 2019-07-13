/**
 Problema 20
 */
export function F(N: number, A: array, K: number, L: number) {
  let i = K;
  let sum = 0;
  for (i = K - 1; i <= L - 1; i++) {
    sum = sum + A[i];
  }
  sum = parseFloat((sum / (L - K + 1)).toFixed(2));
  return sum;
}
