/**
 Array 117. 
    Given an array of N integers, insert an element with zero value 
    before each series of equal numbers of the array 
    (see the series definition in Array116).
 */
export function F(N: number, A: number[]) {
  let i = 0;
  let j = 0;
  let B = [];

  B[0] = 0;

  for (i = 1; i <= N - 1; i++) {
    if (A[i] == A[i - 1]) {
      j = j + 1;
      B[j] = A[i - 1];
    } else {
      j = j + 1;
      B[j] = A[i - 1];
      j = j + 1;
      B[j] = 0;
    }
    console.log(B);
  }
  j = j + 1;
  B[j] = A[N - 1];
  console.log(B);
  return B;
}
