/**
 An array A of N real numbers is given. Output array elements with odd order 
 numbers in ascending order of indices and then output array elements with 
 even order numbers in descending order of indices:
   A1,    A3,    A5,    …,    A6,    A4,    A2.
 Do not use conditional statements.
 */
export function F(N: number, A: array) {
  let i = 0;
  let j = 0;
  let B = [];
  for (i = 1; i <= N; i = i + 2) {
    B[j] = A[i - 1];
    j = j + 1;
  }
  j = N - 1;
  for (i = 2; i <= N; i = i + 2) {
    B[j] = A[i - 1];
    j = j - 1;
  }
  return B;
}
