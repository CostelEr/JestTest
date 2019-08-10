/**
 Given an array of N real numbers, find the maximum among array elements 
 that are neither local minimum nor local maximum (see the definitions of 
  local minimum and local maximum in Array32 and Array33 respectively). 
  If the array does not contain such elements then output 0 (as a real number).
 */
export function F(N: number, A: number[]) {
  let i = 0;
  let k = 0;
  let B = [];
  B[0] = 0;

  for (i = 1; i <= N - 2; i++) {
    if (
      !(A[i] > A[i - 1] && A[i] > A[i + 1]) &&
      !(A[i] < A[i - 1] && A[i] < A[i + 1])
    ) {
      B[k] = A[i];
      k = k + 1;
    }
  }

  return Math.max(...B);
}
