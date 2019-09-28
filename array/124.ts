/**
 Array 124. 
    An integer K (> 0) and an array of N integers are given. 
    Exchange the last and the K-th series of equal numbers 
    of the array (see the series definition in Array116). 
    If the array contains less than K series then do not change it.
 */
export function F(K: number, N: number, A: number[]) {
  let i = 0;
  let x = 1;
  let y = 1;
  let ib = 0;
  let ic = 0;
  let id = 0;
  let ie = 0;
  let B = [];
  let C = [];
  let D = [];
  let E = [];

  for (i = 1; i <= N - 1; i++) {
    if (A[i] != A[i - 1]) {
      y = y + 1;
    }
    console.log(y);
  }

  if (K < y) {
    if (K == 1) {
      C[ic] = A[0];
      ic = ic + 1;
    } else {
      B[ib] = A[0];
      ib = ib + 1;
    }

    for (i = 1; i <= N - 1; i++) {
      if (A[i] != A[i - 1]) {
        x = x + 1;
      }

      if (x < K) {
        B[ib] = A[i];
        ib = ib + 1;
      }

      if (x == K) {
        C[ic] = A[i];
        ic = ic + 1;
      }

      if (x > K && x < y) {
        D[id] = A[i];
        id = id + 1;
      }

      if (x == y) {
        E[ie] = A[i];
        ie = ie + 1;
      }

      console.log(B);
    }

    B = [...B, ...E, ...D, ...C];
  } else {
    B = A;
  }
  console.log(B);
  return B;
}
