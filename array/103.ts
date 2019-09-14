/**
 Array 103. 
 An array of N real numbers is given. Insert new elements with zero 
 value before an element with the minimal value and after 
 an element with the maximal value.
 */
export function F(N: number, A: number[]) {
  let i = 0;
  let max = A[0];
  let imax = 0;
  let min = A[0];
  let imin = 0;
  for (i = 1; i <= N; i++) {
    if (A[i] < min) {
      min = A[i];
      imin = i;
    }
    if (A[i] > max) {
      max = A[i];
      imax = i;
    }
  }

  for (i = N; i > imin; i--) {
    A[i] = A[i - 1];
  }
  A[imin] = 0;

  if (imax > imin) {
    imax = imax + 1;
  }
  for (i = N + 1; i > imax + 1; i--) {
    A[i] = A[i - 1];
  }
  A[imax + 1] = 0;

  return A;
}
