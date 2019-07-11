/**
 Problema 18
 */
export function F(A: array) {
  let i = 0;
  let min = 0;
  while (i <= 9) {
    if (A[i] < A[9]) {
      min = A[i];
      i = 10;
    } else {
      i = i + 1;
    }
  }
  return min;
}
