/**
 Array 110. 
 Given an array of N integers, double occurrences 
 of all elements whose values are even numbers.
 */
export function F(N: number, A: number[]) {
  let i = 0;
  let x = N;

  while (i <= x - 1) {
    if (A[i] % 2 == 0) {
      A.splice(i, 0, A[i]);
      i = i + 1;
      x = x + 1;
    }
    i = i + 1;
  }

  return A;
}
