/**
 Problema 19
 */
export function F(A: array) {
  let i = 8;
  let k = 0;
  while (i >= 1) {
    if ((A[i] < A[9]) & (A[i] > A[0])) {
      k = i + 1;
      i = 0;
    } else {
      i = i - 1;
    }
  }
  return k;
}
