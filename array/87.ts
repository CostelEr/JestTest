/**
 Array 87. An array of N real numbers is given. The values of all array elements, 
 except the first one, are in ascending order. Arrange all array elements 
 in ascending order by moving the first element to a new position.
 */
export function F(N: number, A: number[]) {
  let i = 0;

  for (i = 1; i <= N - 1; i++) {
    if (A[i] < A[i - 1]) {
      [A[i], A[i - 1]] = [A[i - 1], A[i]];
    } else {
      i = N;
    }
  }

  return A;
}
