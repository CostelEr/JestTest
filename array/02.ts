/**
   Given an integer N (> 0), create and output an array of N integers 
   that are the first positive integer powers of 2: 2, 4, 8, 16, … .
 */
export function F(N: number) {
  let a = [];
  let i = 0;
  for (i = 0; i <= N - 1; i++) {
    a[i] = Math.pow(2, i + 1);
  }
  return a;
}
