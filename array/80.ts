/**
 Array 80. Given an array of N real numbers, perform the left shift 
 of array elements on one position by assigning initial values 
 of AN, AN−1, …, A2 to elements AN−1, AN−2, …, A1 respectively 
 (an initial value of the first element will be lost). 
 Assign zero value to the last element of the changed array.
 */
export function F(N: number, A: number[]) {
  let i = 1;

  for (i = 0; i <= N - 2; i++) {
    A[i] = A[i + 1];
  }

  A[N - 1] = 0;

  return A;
}
