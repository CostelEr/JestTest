/**
 Array 96. 
 Given an array of N integers, remove all equal elements 
 (except for their first occurrence) from the array.
 */
export function F(N: number, A: number[]) {
  let i = 0;
  let k = N - 1;
  let j = 0;

  for (i = 0; i <= k - 1; i++) {
    for (j = i + 1; j <= k; j++) {
      if (A[i] == A[j]) {
        A.splice(j, 1);
        j = j - 1;
        k = k - 1;
      }
    }
  }

  return A;
}
