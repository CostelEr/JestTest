/**
 Array 78. Given an array of N real numbers, 
 replace each array element with the average 
 of this element and its neighbors.
 */
export function F(N: number, A: number[]) {
  let B = [];
  B[0] = (A[0] + A[1]) / 2;
  B[N - 1] = (A[N - 1] + A[N - 2]) / 2;

  let i = 1;

  for (i = 1; i <= N - 2; i++) {
    B[i] = (A[i - 1] + A[i] + A[i + 1]) / 3;
  }

  for (i = 0; i <= N - 1; i++) {
    A[i] = parseFloat(B[i].toFixed(2));
  }

  return A;
}
