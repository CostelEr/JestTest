/**
 A real number R and an array of N real numbers are given. 
 Find two different elements such that the sum of their values 
 is the nearest to the number R, and output these elements in 
 ascending order of indices (see the definition of two nearest 
 numbers in Array40).
 */
export function F(R: number, N: number, A: number[]) {
  let i = 0;
  let j = 0;
  let k1 = 0;
  let k2 = 1;
  let nearest = Math.abs(A[1] + A[0] - R);
  for (i = 1; i <= N - 2; i++) {
    for (j = i + 1; j <= N - 1; j++) {
      if (Math.abs(A[j] + A[i] - R) < nearest) {
        nearest = Math.abs(A[j] + A[i] - R);
        k1 = i;
        k2 = j;
      }
    }
  }

  return [A[k1], A[k2]];
}
