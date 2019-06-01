/**
 An integer N (> 0) is given. An integer-valued sequence of the Fibonacci numbers FK is defined as:
 F1 = 1,        F2 = 1,        FK = FK−2 + FK−1,    K = 3, 4, … .
 Output terms F1, F2, …, FN of the sequence.
 */
export function F(N: number) {
  let k = 0;
  let A = [];
  A[0] = 1;
  A[1] = 1;
  for (k = 2; k <= N - 1; k++) {
    A[k] = A[k - 2] + A[k - 1];
  }
  return A;
}
