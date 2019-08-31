/**
 Array 84. Given an array of N real numbers, perform the left cyclic 
 shift of array elements on one position by assigning initial values 
 of AN, AN−1, …, A2, A1 to elements AN−1, AN−2, …, A1, AN respectively.
 */
export function F(N: number, A: number[]) {
  let i = 0;
  let x = A[0];
  for (i = 0; i <= N - 2; i++) {
    A[i] = A[i + 1];
  }

  A[N - 1] = x;

  return A;
}
