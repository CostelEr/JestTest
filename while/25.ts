/**
Given an integer N (> 1), find the first Fibonacci number greater than N 
(see the Fibonacci numbers definition in While24).
 */
export function F(N: number) {
  let a = [];
  a[0] = 1;
  a[1] = 1;
  let k = 2;
  a[k] = a[k - 2] + a[k - 1];

  while (a[k] <= N) {
    k = k + 1;
    a[k] = a[k - 2] + a[k - 1];
  }
  return a[k];
}
