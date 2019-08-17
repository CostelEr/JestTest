/**
 Two arrays A and B of N real numbers are given. 
 Create a new array C of the same size; 
 each element CK must be equal to the largest of elements of A and B with the same index K.
 */
export function F(N: number, A: number[], B: number[]) {
  let C = [];
  let i = 0;

  for (i = 0; i <= N - 1; i++) {
    if (A[i] > B[i]) {
      C[i] = A[i];
    } else {
      C[i] = B[i];
    }
  }

  return C;
}
