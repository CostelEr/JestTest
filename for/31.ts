/**
  An integer N (> 0) is given. A sequence of real numbers AK is defined as:
   A0 = 2,        AK = 2 + 1/AK−1,    K = 1, 2, … .
  Output terms A1, A2, …, AN of the sequence.
 */
export function F(N: number) {
  let i = 0;
  let A = [];
  let B = [];
  A[0] = 2;
  for (i = 1; i <= N; i++) {
    A[i] = 2 + 1 / A[i - 1];
    B[i - 1] = parseFloat(A[i].toFixed(6));
  }
  return B;
}
