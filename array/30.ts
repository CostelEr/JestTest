/**
 An array of N real numbers is given. Find the order numbers of array 
 elements that are greater than their right neighbor. Output these order 
 numbers in ascending order and also output the amount of such elements.
 */
export function F(N: number, A: number[]) {
  let i = 0;
  let k = 0;
  let B = [];
  B[0] = 0;
  for (i = 0; i <= N - 2; i++) {
    if (A[i] > A[i + 1]) {
      B[k] = i + 1;
      k = k + 1;
    }
  }
  if (k > 0) {
    B.push(k);
  }
  return B;
}
