/**
 Array 107. 
 Given an array of N real numbers, triple occurrences of elements 
 with odd order numbers (1, 3, …). 
 Do not use conditional statements in loops.
 */
export function F(N: number, A: number[]) {
  let i = 0;
  let x = N + Math.round(N / 2) + Math.round(N / 2);

  while (i <= x - 1) {
    A.splice(i, 0, A[i], A[i]);
    i = i + 4;
  }

  return A;
}
