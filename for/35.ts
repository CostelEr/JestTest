/**
 An integer N (> 2) is given. A sequence of integers AK is defined as:
 A1 = 1,        A2 = 2,        A3 = 3,        AK = AK−1 + AK−2 − 2·AK−3,    K = 4, 5, … .
 Output terms A1, A2, …, AN of the sequence.
 */
export function F(N: number) {
  let k = 0;
  let A = [];
  A[0] = 1;
  A[1] = 2;
  A[2] = 3;
  for (k = 3; k <= N - 1; k++) {
    A[k] = A[k - 1] + A[k - 2] - 2 * A[k - 3];
  }
  return A;
}
