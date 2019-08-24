/**
 Array 69. Given an array of N real numbers (N is an even number), 
 exchange values of its first and second element, 
 its third and fourth element, and so on.
 */
export function F(N: number, A: number[]) {
  let i = 1;

  for (i = 1; i <= N - 1; i = i + 2) {
    [A[i], A[i - 1]] = [A[i - 1], A[i]];
  }

  return A;
}
