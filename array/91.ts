/**
 Array 91. 
 An array of N real numbers and two integers K and L (1 ≤ K < L ≤ N) are given. 
 Remove elements with the order numbers in the range K to L inclusively 
 from the array and output the size of the changed array and all its elements.
 */
export function F(N: number, A: number[], K: number, L: number) {
  let i = K - 1;
  let j = L;

  let y = N - (L - K + 1);

  while (j <= N - 1) {
    A[i] = A[j];
    i = i + 1;
    j = j + 1;
  }

  i = N - 1;
  while (i >= y) {
    A.pop();
    i = i - 1;
  }

  return [y, A];
}
