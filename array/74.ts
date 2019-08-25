/**
 Array 74. An array of N real numbers is given. 
 Assign zero value to the array elements between 
 the minimal element and the maximal element 
 (not including these elements).
 */
export function F(N: number, A: number[]) {
  let i = 0;
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
  for (i = imin + 1; i <= imax - 1; i++) {
    A[i] = 0;
  }
  return A;
}
