/**
 An array A of N real numbers is given. Output array elements as follows:
 A1,    AN,    A2,    AN−1,    A3,    AN−2,    … .
 */
export function F(N: number, A: array) {
  let i = 0;
  let j = N - 1;
  let k = 0;
  let B = [];
  for (i = 1; i <= N - 1; i = i + 2) {
    B[i - 1] = A[k];
    B[i] = A[j];
    j = j - 1;
    k = k + 1;
  }
  if (N % 2 == 1) {
    k = Math.trunc(N / 2);
    B[N - 1] = A[k];
  }
  return B;
}
