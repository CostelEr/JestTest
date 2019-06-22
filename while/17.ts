/**
   Given an integer N (> 0), output all digits of the number N starting 
   from the right digit (a ones digit). Use the operators of integer 
   division and taking the remainder after integer division.
 */
export function F(N: number) {
  let k = N;
  let i = 0;
  let a = [];
  while (k >= 1) {
    a[i] = k % 10;
    i = i + 1;
    k = Math.trunc(k / 10);
  }

  return a;
}
