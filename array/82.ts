/**
 Array 82. Given an array of N real numbers and an integer K (1 ≤ K < N), 
 perform the left shift of array elements on K positions by assigning 
 initial values of AN, AN−1, …, AK+1 to elements AN−K, AN−K−1, …, A1 
 respectively (an initial value of the first K elements will be lost). 
 Assign zero value to the last K elements of the changed array.
 */
export function F(N: number, A: number[], k: number) {
  let i = 0;

  for (i = 0; i <= N - k - 1; i++) {
    A[i] = A[i + k];
  }

  for (i = N - k; i <= N - 1; i++) {
    A[i] = 0;
  }

  return A;
}
