/**
 Array 106. 
 Given an array of N real numbers, double occurrences of elements 
 with even order numbers (2, 4, …). 
 Do not use conditional statements in loops.
 */
export function F(N: number, A: number[]) {
  let i = 1;
  let x = N + Math.trunc(N / 2);
  while (i <= x - 1) {
    A.splice(i, 0, A[i]);
    i = i + 3;
  }

  return A;
}
