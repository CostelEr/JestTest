/**
 A real number R and an array A of N real numbers are given. 
 Find the array element that is the nearest to the number R 
 (i. e., an element AK such that the value |AK − R| is minimal).
 */
export function F(R: number, N: number, A: number[]) {
  let i = 0;
  let min = A[0];

  for (i = 1; i <= N - 1; i++) {
    if (Math.abs(A[i] - R) < Math.abs(min - R)) {
      min = A[i];
    }
  }

  return min;
}
