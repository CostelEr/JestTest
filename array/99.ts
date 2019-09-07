/**
 Array 99. 
 Given an array of N integers, remove all elements whose values appear 
 more than twice in the array. Output the size of the changed array and all its elements.
 */
export function F(N: number, A: number[]) {
  let i = 0;
  let x = 0;
  let j = 0;
  let q = 0;
  let k = 0;

  for (i = 0; i <= A.length; i++) {
    x = A[i];

    q = 0;
    for (j = 0; j <= A.length; j++) {
      if (x == A[j]) {
        q = q + 1;
      }
    }
    if (q >= 3) {
      for (k = 0; k <= A.length; k++) {
        if (x == A[k]) {
          A.splice(k, 1);
          k = k - 1;
        }
      }
    }
  }

  k = A.length;
  return [k, A];
}
