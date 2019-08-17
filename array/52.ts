/**
 Given an array A of N real numbers, create a new array B of the same size with elements defined as:
 BK	 = 	2·AK,	if AK < 5,
 	 	AK/2	otherwise.
 */
export function F(N: number, A: number[]) {
  let B = [];
  let i = 0;

  for (i = 0; i <= N - 1; i++) {
    if (A[i] < 5) {
      B[i] = 2 * A[i];
    } else {
      B[i] = A[i] / 2;
    }
  }

  return B;
}
