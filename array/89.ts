/**
 Array 89. 
 An array of N real numbers is given. The values of all array elements, 
 except one element, are in descending order. Arrange all array elements 
 in descending order by moving the element, 
 that violates ordering, to a new position.
 */
export function F(N: number, A: number[]) {
  let i = 0;
  let j = 0;

  for (i = 0; i <= N - 2; i++) {
    for (j = i + 1; j <= N - 1; j++) {
      if (A[i] < A[j]) {
        [A[i], A[j]] = [A[j], A[i]];
      }
    }
  }

  return A;
}
