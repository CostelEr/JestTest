/**
 Array 77. Given an array of N real numbers, replace each 
 local minimum with its square (an array element is called 
 the local minimum if it is smaller than its neighbors).
 */
export function F(N: number, A: number[]) {
  let B = [];

  if (A[0] < A[1]) {
    B[0] = parseFloat((A[0] * A[0]).toFixed(2));
  } else {
    {
      B[0] = A[0];
    }
  }
  if (A[N - 1] < A[N - 2]) {
    B[N - 1] = parseFloat((A[N - 1] * A[N - 1]).toFixed(2));
  } else {
    {
      B[N - 1] = A[N - 1];
    }
  }

  let i = 1;

  for (i = 1; i <= N - 2; i++) {
    if (A[i] < A[i - 1] && A[i] < A[i + 1]) {
      B[i] = parseFloat((A[i] * A[i]).toFixed(2));
    } else {
      B[i] = A[i];
    }
  }

  return B;
}
