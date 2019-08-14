/**
 An array of N distinct integers is given. 
 If the array elements represent an arithmetic sequence 
 (see Array3) then output its common difference, otherwise output 0.
 */
export function F(N: number, A: array) {
  let i = 0;
  let pr = A[1] - A[0];
  for (i = 2; i <= N - 1; i++) {
    if (A[i] - A[i - 1] != pr) {
      pr = 0;
      i = N;
    }
  }

  return pr;
}
