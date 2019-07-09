/**
 An array A of N real numbers and an integer K (1 ≤ K ≤ N) are given. 
 Output array elements with order numbers that are multiples of K: AK, A2·K, A3·K, … . 
 Do not use conditional statements.
 */
export function F(N: number, A: array, K: number) {
  let i = 0;
  let j = 0;
  let B = [];
  for (i = K; i <= N; i = i + K) {
    B[j] = A[i - 1];
    j = j + 1;
  }
  return B;
}
