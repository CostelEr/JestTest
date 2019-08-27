/**
 Array 76. Given an array of N real numbers, assign zero 
 value to all its local maximums (an array element is called 
 the local maximum if it is greater than its neighbors).
 */
export function F(N: number, A: number[]) {
  let B = [];

  if (A[0] > A[1]) {
    B[0] = 0;
  } else {
    B[0] = A[0];
  }
  if (A[N - 1] > A[N - 2]) {
    B[N - 1] = 0;
  } else {
    B[N - 1] = A[N - 1];
  }

  let i = 1;

  for (i = 1; i <= N - 2; i++) {
    if (A[i] > A[i - 1] && A[i] > A[i + 1]) {
      B[i] = 0;
    } else B[i] = A[i];
  }

  return B;
}
