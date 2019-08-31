/**
 Array 86. Given an array of N real numbers and an integer K (1 ≤ K ≤ 4, K < N), 
 perform the left cyclic shift of array elements on K positions by assigning 
 initial values of AN, AN−1, …, A1 to elements AN−K, AN−K−1, …, AN−K+1 respectively. 
 An additional array of 4 elements may be used for performing the required shift.
 */
export function F(N: number, A: number[], k: number) {
  let i = 0;
  let B = [];

  for (i = 0; i <= N - k; i++) {
    B[i] = A[i];
    A[i] = A[i + k];
  }

  let j = 0;
  for (i = N - k; i <= N - 1; i++) {
    A[i] = B[j];
    j = j + 1;
  }

  return A;
}
