/**
 Given an integer N (> 2), create and output an array of N integers that are the initial terms 
 of a sequence {FK} of the Fibonacci numbers:
 F1 = 1,        F2 = 1,        FK = FK−2 + FK−1,    K = 3, 4, … .
 */
export function F(N: number) {
  let b = [];
  let k = 0;
  b[0] = 1;
  b[1] = 1;
  for (k = 2; k <= N - 1; k++) {
    b[k] = b[k - 2] + b[k - 1];
  }
  return b;
}
