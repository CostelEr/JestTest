/**
 Array 111. 
 Given an array of N integers, triple occurrences 
 of all elements whose values are odd numbers.
 */
export function F(N: number, A: number[]) {
  let i = 0;
  let x = N;

  while (i <= x - 1) {
    if (A[i] % 2 != 0) {
      A.splice(i, 0, A[i], A[i]);
      i = i + 2;
      x = x + 2;
    }
    i = i + 1;
  }

  return A;
}
