/**
 An array of N nonzero integers is given. If positive and negative numbers 
 are alternated in the array then output 0, otherwise output the order number 
 of the first element that breaks the above condition.
 */
export function F(N: number, A: number[]) {
  let i = 0;
  let pr = 0;
  for (i = 1; i <= N - 1; i++) {
    if ((A[i] > 0 && A[i - 1] > 0) || (A[i] < 0 && A[i - 1] < 0)) {
      pr = i + 1;
      i = N;
    }
  }

  return pr;
}
