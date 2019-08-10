/**
 An array of N real numbers is given. Find the order numbers of array elements 
 that are greater than their left neighbor. Output these order numbers in descending 
 order and also output the amount of such elements.
 */
export function F(N: number, A: number[]) {
  let i = 0;
  let k = 0;
  let B = [];
  B[0] = 0;
  for (i = 1; i <= N - 1; i++) {
    if (A[i] > A[i - 1]) {
      B[k] = i + 1;
      k = k + 1;
    }
  }
  if (k > 0) {
    B.reverse();
    B.push(k);
  }
  return B;
}
