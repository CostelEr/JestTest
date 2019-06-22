/**
An integer N (> 1) is given. An integer-valued sequence of the Fibonacci numbers 
FK is defined as:  F1 = 1,        F2 = 1,        FK = FK−2 + FK−1,    K = 3, 4, … .
Determine whether N is a Fibonacci number or not, and output True or False respectively.
 */
export function F(N: number) {
  let a = [];
  a[0] = 1;
  a[1] = 1;
  let k = 2;
  a[k] = a[k - 2] + a[k - 1];

  let Q = false;
  while (a[k] <= N) {
    if (a[k] == N) {
      Q = true;
    }
    k = k + 1;
    a[k] = a[k - 2] + a[k - 1];
  }
  return Q;
}
