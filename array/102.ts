/**
 Array 102. 
 An array of N real numbers and an integer K (1 ≤ K ≤ N) are given. 
 Insert a new element with zero value after an element with the order number K.
 */
export function F(N: number, A: number[], K: numer) {
  let i = 0;

  for (i = N; i > K; i--) {
    A[i] = A[i - 1];
  }
  A[K] = 0;
  return A;
}
