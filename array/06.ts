/**
 Given three integers N (> 2), A, B, create and output an array of N integers 
 such that the first element is equal to A, the second one is equal to B, 
 and each subsequent element is equal to the sum of all previous ones.
 */
export function F(N, A, B: number) {
  let x = [];
  let i = 0;
  x[0] = A;
  x[1] = B;
  let sum = A + B;
  for (i = 2; i <= N - 1; i++) {
    x[i] = sum;
    sum = sum + x[i];
  }
  return x;
}
