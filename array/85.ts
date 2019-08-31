/**
 Array 85. Given an array of N real numbers and an integer K (1 ≤ K ≤ 4, K < N), 
 perform the right cyclic shift of array elements on K positions by assigning 
 initial values of A1, A2, …, AN to elements AK+1, AK+2, …, AK respectively. 
 An additional array of 4 elements may be used for performing the required shift.
 */
export function F(N: number, A: number[], k: number) {
  let i = 0;
  let B = [];
  let j = 0;

  for (i = N - 1; i >= k; i--) {
    B[j] = A[i];
    j = j + 1;
    A[i] = A[i - k];
  }

  j = 0;
  for (i = k - 1; i >= 0; i--) {
    A[i] = B[j];
    j = j + 1;
  }

  return A;
}
