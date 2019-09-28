/**
 Array 122. 
    An integer K (> 1) and an array of N integers are given. 
    Remove the K-th series of equal numbers from the array 
    (see the series definition in Array116). 
    If the array contains less than K series then do not change it.
 */
export function F(K: number, N: number, A: number[]) {
  let i = 0;
  let x = 1;
  let j = 0;
  let B = [];

  if (x != K) {
    B[j] = A[i];
    j = j + 1;
  }

  for (i = 1; i <= N - 1; i++) {
    if (A[i] != A[i - 1]) {
      x = x + 1;
    }
    if (x != K) {
      B[j] = A[i];
      j = j + 1;
    }

    console.log(B);
  }

  return B;
}
