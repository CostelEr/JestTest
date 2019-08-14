/**
 An array of N integers is given. If odd and even numbers are alternated 
 in the array then output 0, otherwise output the order number of the first 
 element that breaks the above condition.
 */
export function F(N: number, A: number[]) {
  let i = 0;
  let pr = 0;
  for (i = 1; i <= N - 1; i++) {
    if (A[i] % 2 == A[i - 1] % 2) {
      pr = i + 1;
      i = N;
    }
  }

  return pr;
}
