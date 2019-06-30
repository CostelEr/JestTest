/**
 Given an array of N integers, output all even numbers contained 
 in the array in ascending order of their indices and then output 
 all odd numbers contained in the array in descending order of their indices.
 */
export function F(N: number, A: array) {
  let i = 0;
  let j = 0;
  let B = [];
  for (i = 0; i <= N - 1; i++) {
    if (A[i] % 2 == 0) {
      B[j] = A[i];
      j = j + 1;
    }
  }
  for (i = N - 1; i >= 0; i--) {
    if (A[i] % 2 == 1) {
      B[j] = A[i];
      j = j + 1;
    }
  }
  return B;
}
