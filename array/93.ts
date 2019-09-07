/**
 Array 93. 
 Given an array of N (> 2) integers, remove all elements with even 
 order numbers (2, 4, …) from the array. Do not use conditional statements.
 */
export function F(N: number, A: number[]) {
  let i = 0;
  let j = Math.round(N / 2);
  let B = [];

  for (i = 0; i <= j - 1; i++) {
    B[i] = A[i * 2];
  }

  for (i = 0; i <= j - 1; i++) {
    A[i] = B[i];
  }

  for (i = N - 1; i >= j; i--) {
    A.pop();
  }

  return A;
}
