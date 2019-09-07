/**
 Array 95. 
 Given an array of N integers, remove all successive equal elements 
 (except for their first occurrence) from the array.
 */
export function F(N: number, A: number[]) {
  let i = 0;
  let j = N - 2;

  for (i = 0; i <= j; i++) {
    if (A[i] == A[i + 1]) {
      A.splice(i + 1, 1);
      j = j - 1;
      i = i - 1;
    }
  }

  return A;
}
