/**
 An integer N (> 1) is given. A sequence of real numbers AK is defined as:
 A1 = 1,        A2 = 2,        AK = (AK−2 + 2·AK−1)/3,    K = 3, 4, … .
 Output terms A1, A2, …, AN of the sequence.
 */
export function F(N: number) {
  let k = 0;
  let A = [];
  A[0] = 1;
  A[1] = 2;
  for (k = 2; k <= N - 1; k++) {
    A[k] = parseFloat(((A[k - 2] + 2 * A[k - 1]) / 3).toFixed(6));
  }
  return A;
}
