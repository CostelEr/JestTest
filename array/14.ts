/**
 An array A of N real numbers is given. Output array elements with even order numbers 
 (in ascending order of indices) and then output array elements with odd order numbers 
 (in ascending order of indices too):
   A2,    A4,    A6,    …,    A1,    A3,    A5,    … .
  Do not use conditional statements.
 */
export function F(N: number, A: array) {
  let i = 0;
  let j = 0;
  let B = [];
  for (i = 2; i <= N; i = i + 2) {
    B[j] = A[i - 1];
    j = j + 1;
  }
  for (i = 1; i <= N; i = i + 2) {
    B[j] = A[i - 1];
    j = j + 1;
  }
  return B;
}
