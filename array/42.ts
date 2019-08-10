/**
 A real number R and an array of N real numbers are given. 
 Find two adjacent elements whose sum of values is the nearest 
 to the number R and output these elements in ascending order 
 of its indices (see the definition of two nearest numbers in Array40).
 */
export function F(R: number, N: number, A: number[]) {
  let i = 0;
  let k = 1;
  let min = Math.abs(R - (A[k] + A[k - 1]));

  for (i = 2; i <= N - 1; i++) {
    if (Math.abs(R - (A[i] + A[i - 1])) < min) {
      min = Math.abs(R - (A[i] + A[i - 1]));
      k = i;
    }
  }

  return [A[k - 1], A[k]];
}
