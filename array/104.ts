/**
 Array 104. 
 An array of N real numbers and two integers 
 K and M (1 ≤ K ≤ N, 1 ≤ M ≤ 10) are given. 
 Insert M new elements with zero value before 
 an element with the order number K.
 */
export function F(N: number, A: number[], K: number, M: number) {
  let i = 0;

  for (i = N + M - 1; i >= K + M - 1; i--) {
    A[i] = A[i - M];
  }
  for (i = K - 1; i < K + M - 1; i++) {
    A[i] = 0;
  }

  return A;
}
