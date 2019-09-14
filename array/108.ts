/**
 Array 108. 
 Given an array of N real numbers, insert an element 
 with zero value before each element with positive value.
 */
export function F(N: number, A: number[]) {
  let i = 0;
  let x = N;

  while (i <= x - 1) {
    if (A[i] > 0) {
      A.splice(i, 0, 0);
      i = i + 1;
      x = x + 1;
    }
    i = i + 1;
  }

  return A;
}
