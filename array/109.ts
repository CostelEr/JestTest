/**
 Array 109. 
 Given an array of N real numbers, insert an element
 with zero value after each element with negative value.
 */
export function F(N: number, A: number[]) {
  let i = 0;
  let x = N;

  while (i <= x - 1) {
    if (A[i] < 0) {
      i = i + 1;
      x = x + 1;
      A.splice(i, 0, 0);
    }
    i = i + 1;
  }

  return A;
}
