/**
 Given an integer N (> 1) that is a Fibonacci number: N = FK, 
 find its order number K (see the Fibonacci numbers definition in While24).
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

  return k;
}
