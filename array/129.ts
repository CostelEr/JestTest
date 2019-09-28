/**
 Array 129. 
    Given an array of N integers, increase its last series of the maximal 
    length by one element (see the series definition in Array116).
 */
export function F(N: number, A: number[]) {
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

  let max = B[0];
  let maxi = 0;
  for (i = 1; i <= B.length; i++) {
    if (B[i] >= max) {
      max = B[i];
      maxi = i;
    }
  }
  B[maxi] = B[maxi] + 1;

  let x = 0;
  let D = [];
  for (i = 0; i <= C.length; i++) {
    for (j = 0; j <= B[i] - 1; j++) {
      D[x] = C[i];
      x = x + 1;
    }
  }
  console.log(A);
  console.log(D);
  return D;
}
