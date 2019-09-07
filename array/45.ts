/**
 Given an array of N real numbers, find two nearest array elements 
 (i. e., two different elements AK and AL such that the value |AK − AL| is minimal) 
 and output their order numbers in ascending order.
 */
export function F(N: number, A: number[]) {
  let i = 0;
  let j = 0;
  let k1 = 1;
  let k2 = 2;
  let nearest = Math.abs(A[1] - A[0]);
  for (i = 0; i <= N - 2; i++) {
    for (j = i + 1; j <= N - 1; j++) {
      if (Math.abs(A[j] - A[i]) < nearest) {
        nearest = Math.abs(A[j] - A[i]);
        k1 = i + 1;
        k2 = j + 1;
      }
    }
  }

  return [k1, k2];
}
