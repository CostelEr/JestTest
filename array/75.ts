/**
 Array 75. An array of N real numbers is given. 
 Change the order of the array elements between 
 the minimal element and the maximal element 
 (including these elements) to inverse one.
 */
export function F(N: number, A: number[]) {
  let i = 0;
  let j = 0;
  let k = 0;
  let imin = 0;
  let imax = 0;
  let min = A[0];
  let max = A[0];

  for (i = 0; i <= N - 1; i++) {
    if (A[i] < min) {
      min = A[i];
      imin = i;
    }
    if (A[i] > max) {
      max = A[i];
      imax = i;
    }
  }

  if (imin > imax) {
    [imin, imax] = [imax, imin];
  }

  k = Math.floor((imax - imin - 1) / 2);
  j = imax;

  for (i = imin; i <= imin + k; i++) {
    [A[i], A[j]] = [A[j], A[i]];
    j = j - 1;
  }
  return A;
}
