/**
 An array A of N integers is given. Write elements of A with even 
 order numbers to a new array B and then write elements of A with 
 odd order numbers to the same array B, 
 so the array B will contain the following elements:
  A2,    A4,    A6,    …,    A1,    A3,    A5,    … .
 */
export function F(N: number, A: number[]) {
  let B = [];
  let i = 0;
  let k = 0;
  for (i = 1; i <= Math.trunc(N / 2); i++) {
    B[k] = A[i * 2 - 1];
    k = k + 1;
  }
  for (i = 0; i < Math.trunc((N + 1) / 2); i++) {
    B[k] = A[i * 2];
    k = k + 1;
  }
  return B;
}
