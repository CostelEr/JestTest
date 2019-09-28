/**
 Array 126. 
    An integer L (> 0) and an array of N integers are given. 
    Replace each series, whose length is equal to L, by one 
    element with zero value (see the series definition in Array116).
 */
export function F(L: number, N: number, A: number[]) {
  let i = 0;
  let j = 0;
  let B = [];
  let C = [];

  B[j] = 1;
  C[j] = A[0];
  for (i = 1; i <= N - 1; i++) {
    if (A[i] == A[i - 1]) {
      B[j] = B[j] + 1;
    } else {
      j = j + 1;
      C[j] = A[i];
      B[j] = 1;
    }
  }
  console.log(C);
  console.log(B);

  let x = 0;
  let D = [];
  for (i = 0; i <= C.length; i++) {
    if (B[i] == L) {
      D[x] = 0;
      x = x + 1;
    } else {
      for (j = 0; j <= B[i] - 1; j++) {
        D[x] = C[i];
        x = x + 1;
      }
    }
  }
  console.log(A);
  console.log(D);
  return D;
}
