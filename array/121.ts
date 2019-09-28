/**
 Array 121. 
    An integer K (> 0) and an array of N integers are given. 
    Double the length of the K-th series of equal numbers of 
    the array (see the series definition in Array116). 
    If the array contains less than K series then do not change it.
 */
export function F(K: number, N: number, A: number[]) {
  let i = 0;
  let x = 1;
  let j = 0;
  let B = [];

  B[0] = A[0];
  if (x == K) {
    j = j + 1;
    B[j] = A[i];
  }

  for (i = 1; i <= N - 1; i++) {
    if (A[i] != A[i - 1]) {
      x = x + 1;
    }
    if (x == K) {
      j = j + 1;
      B[j] = A[i];
    }
    j = j + 1;
    B[j] = A[i];
    console.log(B);
  }

  return B;
}
