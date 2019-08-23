/**
 Array 65
 */
export function F(N: number, A: number[], k: number) {
  let i = 0;
  let B = [];

  for (i = 0; i <= N - 1; i++) {
    B[i] = parseFloat((A[i] + A[k - 1]).toFixed(2));
  }

  return B;
}
