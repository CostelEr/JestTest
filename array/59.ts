/**
 Array59
 */
export function F(N: number, A: number[]) {
  let B = [];
  let i = 0;
  let j = 0;

  for (i = 0; i <= N - 1; i++) {
    B[i] = 0;
    for (j = 0; j <= i; j++) {
      B[i] = B[i] + A[j];
    }
    B[i] = B[i] / (i + 1);
    B[i] = parseFloat(B[i].toFixed(2));
  }

  return B;
}
