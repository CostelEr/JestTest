/**
 An array A of N real numbers is given (N is an even number). 
 Output array elements with even order numbers in ascending order of indices: 
 A2, A4, A6, …, AN. Do not use conditional statements.
 */
export function F(N: number, A: array) {
  let i = 0;
  let j = 0;
  let B = [];
  for (i = 2; i <= N; i = i + 2) {
    B[j] = A[i - 1];
    j = j + 1;
  }
  return B;
}
