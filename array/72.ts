/**
 Array 72. An array A of N real numbers and two 
 integers K and L (1 ≤ K < L ≤ N) are given. 
 Change the order of the array elements between 
 AK and AL (including these elements) to inverse one.
 */
export function F(N: number, A: number[], K: number, L: number) {
  let i = 0;
  let Y = Math.floor((L - K) / 2) - 1;
  let j = L - 1;

  for (i = K - 1; i <= K + Y; i++) {
    [A[i], A[j]] = [A[j], A[i]];
    j = j - 1;
  }

  return A;
}
