/**
   Given an integer N (> 0), create and output an array of N integers 
   that are the first positive odd numbers: 1, 3, 5, … .
 */
export function F(N: number) {
  let a = [];
  let i = 0;
  for (i = 0; i <= N - 1; i++) {
    a[i] = (i + 1) * 2 - 1;
  }
  return a;
}
