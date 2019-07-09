/**
 An array A of N real numbers is given (N is an odd number). 
 Output array elements with odd order numbers in descending order of indices: 
 AN, AN−2, AN−4, …, A1. Do not use conditional statements.
 */
export function F(N: number, A: array) {
  let i = 0;
  let j = 0;
  let B = [];
  for (i = N; i >= 1; i = i - 2) {
    B[j] = A[i - 1];
    j = j + 1;
  }
  return B;
}
