/**
 Array 79. Given an array of N real numbers, perform the right 
 shift of array elements on one position by assigning initial 
 values of A1, A2, …, AN−1 to elements A2, A3, …, AN respectively 
 (an initial value of the last element will be lost). 
 Assign zero value to the first element of the changed array.
 */
export function F(N: number, A: number[]) {
  let i = 1;

  for (i = N - 1; i >= 1; i--) {
    A[i] = A[i - 1];
  }

  A[0] = 0;

  return A;
}
