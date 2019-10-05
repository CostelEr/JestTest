/**
 An array A of N real numbers is given. Output array elements as follows:
 A1,    A2,   AN, AN−1, A3, A4, AN−2,    … .
 */
export function F(N: number, A = []) {
  let i = 0;
  let j = N - 1;
  let k = 0;
  let B = [];
  for (i = 0; i <= N - 1; i = i + 4) {
    B[i] = A[k];
    k = k + 1;
    B[i + 1] = A[k];
    k = k + 1;
  }
  for (i = 2; i <= N - 1; i = i + 4) {
    B[i] = A[j];
    j = j - 1;
    B[i + 1] = A[j];
    j = j - 1;
  }

  let C = [];
  for (i = 0; i <= N - 1; i++) {
    C[i] = B[i];
  }

  return C;
}
