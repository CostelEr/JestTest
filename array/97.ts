/**
 Array 97. 
 Given an array of N integers, remove all equal elements 
 (except for their last occurrence) from the array.
 */
export function F(N: number, A: number[]) {
  let i = 0;
  let j = 0;

  let k = N - 1;
  i = k;

  while (i >= 0) {
    j = i - 1;
    while (j >= 0) {
      if (A[i] == A[j]) {
        A.splice(j, 1);
        j = j - 1;
        i = i - 1;
      } else {
        j = j - 1;
      }
    }
    i = i - 1;
  }

  return A;
}
