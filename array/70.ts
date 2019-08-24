/**
 Array 70. Given an array of N real numbers (N is an even number), 
 exchange values of the first half and the second half of its elements.
 */
export function F(N: number, A: number[]) {
  let i = 0;
  let k = N / 2;
  for (i = 0; i <= N / 2 - 1; i++) {
    [A[i], A[k]] = [A[k], A[i]];
    k = k + 1;
  }

  return A;
}
