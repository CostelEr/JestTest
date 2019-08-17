/**
 Array55. An array A of N (≤ 15) integers is given. 
 Write elements of A with odd order numbers (1, 3, …) 
 to a new array B and output the size of array B and all its elements. 
 Do not use conditional statements.
 */
export function F(N: number, A: number[]) {
  let B = [];
  let i = 0;
  let k = 0;
  for (i = 0; i < Math.trunc((N + 1) / 2); i++) {
    B[i] = A[i * 2];
    k = k + 1;
  }

  return [k, B];
}
