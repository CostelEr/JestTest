/**
 An array A of N (≤ 15) integers is given. 
 Write elements of A with order numbers that 
 are multiples of 3 (3, 6, …) to a new array B and 
 output the size of array B and all its elements. Do not use conditional statements.
 */
export function F(N: number, A: number[]) {
  let B = [];
  let i = 0;
  let k = 0;
  for (i = 1; i <= Math.trunc(N / 3); i++) {
    B[i - 1] = A[i * 3 - 1];
    k = k + 1;
  }

  return [k, B];
}
