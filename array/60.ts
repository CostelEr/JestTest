/**
 Array 60
 */
export function F(N: number, A: number[]) {
  let B = [];
  let i = 0;
  let j = 0;

  for (i = N - 1; i >= 0; i--) {
    B[i] = 0;
    for (j = N - 1; j >= i; j--) {
      B[i] = B[i] + A[j];
    }
    B[i] = parseFloat(B[i].toFixed(2));
  }

  return B;
}
