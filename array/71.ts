/**
 Array 71. Given an array of N real numbers, 
 change the order of its elements to inverse one.
 */
export function F(N: number, A: number[]) {
  let i = 0;
  let k = N - 1;
  for (i = 0; i <= Math.floor(N / 2) - 1; i++) {
    [A[i], A[k]] = [A[k], A[i]];
    k = k - 1;
  }

  return A;
}
