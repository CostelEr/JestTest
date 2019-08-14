/**
 An array of N real numbers and two integers K and L (1 < K ≤ L ≤ N) are given. 
 Find the sum of all array elements except ones with the order numbers in the range K to L inclusively.
 */
export function F(N: number, A: array, K: number, L: number) {
  let i = K;
  let sum = 0;
  for (i = 0; i <= K - 2; i++) {
    sum = sum + A[i];
  }
  for (i = L; i <= N - 1; i++) {
    sum = sum + A[i];
  }

  return sum;
}
