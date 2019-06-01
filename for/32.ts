/**
  An integer N (> 0) is given. A sequence of real numbers AK is defined as:
   A0 = 1,        AK = (AK−1 + 1)/K,    K = 1, 2, … .
 Output terms A1, A2, …, AN of the sequence.
 */
export function F(N: number) {
  let k = 0;
  let A = [];
  let B = [];
  A[0] = 1;
  for (k = 1; k <= N; k++) {
    A[k] = (A[k - 1] + 1) / k;
    B[k - 1] = parseFloat(A[k].toFixed(6));
  }
  return B;
}
