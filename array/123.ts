/**
 Array 123. 
    An integer K (> 1) and an array of N integers are given. 
    Exchange the first and the K-th series of equal numbers 
    of the array (see the series definition in Array116). 
    If the array contains less than K series then do not change it.
 */
export function F(K: number, N: number, A: number[]) {
  let i = 0;
  let x = 1;
  let ib = 0;
  let ic = 0;
  let id = 0;
  let ie = 0;
  let B = [];
  let C = [];
  let D = [];
  let E = [];

  B[0] = A[0];
  ib = ib + 1;

  for (i = 1; i <= N - 1; i++) {
    if (A[i] != A[i - 1]) {
      x = x + 1;
    }

    if (x == 1) {
      B[ib] = A[i];
      ib = ib + 1;
    }

    if (x < K && x > 1) {
      C[ic] = A[i];
      ic = ic + 1;
    }

    if (x > K) {
      E[ie] = A[i];
      ie = ie + 1;
    }

    if (x == K) {
      D[id] = A[i];
      id = id + 1;
    }

    console.log(E);
  }

  if (x < K) {
    B = A;
  } else {
    B = [...D, ...C, ...B, ...E];
  }
  return B;
}
