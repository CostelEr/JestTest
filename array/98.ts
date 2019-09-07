/**
 Array 98. 
 Given an array of N integers, remove all elements whose values appear 
 less than three times in the array. Output the size of the changed 
 array and all its elements.
 */
export function F(N: number, A: number[]) {
  let i = 0;
  let i2 = 0;
  let q = 0;
  let j = 0;
  let k = N - 1;

  for (i = 0; i <= k; i++) {
    q = 0;

    for (j = 0; j <= k; j++) {
      if (A[i] == A[j]) {
        q = q + 1;
      }
    }

    if (q < 3) {
      A.splice(i, 1);
      k = k - 1;
      i = i - 1;
    }
  }

  return A;
}
