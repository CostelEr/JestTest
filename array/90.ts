/**
 Array 90. 
 An array of N real numbers and an integer K (1 ≤ K ≤ N) are given. 
 Remove an element with the order number K from the array.
 */
export function F(N: number, A: number[], K: number) {
  let i = 0;

  for (i = K - 1; i <= N - 2; i++) {
    A[i] = A[i + 1];
  }
  A.pop();

  return A;
}
