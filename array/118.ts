/**
 Array 118. 
    Given an array of N integers, insert an element with zero value after each series 
    of equal numbers of the array (see the series definition in Array116).
 */
export function F(N: number, A: number[]) {
  let i = 0;
  let j = 0;
  let B = [];

  for (i = 0; i <= N - 2; i++) {
    if (A[i] == A[i + 1]) {
      B[j] = A[i];
      j = j + 1;
    } else {
      B[j] = A[i];
      j = j + 1;
      B[j] = 0;
      j = j + 1;
    }
    console.log(B);
  }
  B[j] = A[N - 1];
  j = j + 1;
  B[j] = 0;
  console.log(B);
  return B;
}
