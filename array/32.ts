/**
  Given an array of N real numbers, find the order number of its first local minimum 
  (an array element is called the local minimum if it is smaller than its neighbors).
 */
export function F(N: number, A: number[]) {
  let i = 0;
  let minL = 0;
  if (A[0] < A[1]) {
    minL = 1;
  } else {
    minL = N;
    for (i = 1; i <= N - 2; i++) {
      if (A[i] < A[i - 1] && A[i] < A[i + 1]) {
        minL = i + 1;
        i = N;
      }
    }
  }

  return minL;
}
