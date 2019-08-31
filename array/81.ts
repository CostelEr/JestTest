/**
 Array 81. Given an array of N real numbers and an integer K (1 ≤ K < N), 
 perform the right shift of array elements on K positions by assigning 
 initial values of A1, A2, …, AN−K to elements AK+1, AK+2, …, AN respectively 
 (an initial value of the last K elements will be lost). 
 Assign zero value to the first K elements of the changed array.
 */
export function F(N: number, A: number[], k: number) {
  let i = 0;

  for (i = N - 1; i >= k; i--) {
    A[i] = A[i - k];
  }

  for (i = 0; i <= k - 1; i++) {
    A[i] = 0;
  }

  return A;
}
