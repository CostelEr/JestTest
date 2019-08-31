/**
 Array 83. Given an array of N real numbers, perform the right 
 cyclic shift of array elements on one position by assigning 
 initial values of A1, A2, …, AN−1, AN 
 to elements A2, A3, …, AN, A1 respectively.
 */
export function F(N: number, A: number[]) {
  let i = 0;
  let x = A[N - 1];
  for (i = N - 1; i >= 1; i--) {
    A[i] = A[i - 1];
  }
  A[0] = x;

  return A;
}
