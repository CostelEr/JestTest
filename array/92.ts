/**
 Array 92. 
 Given an array of N integers, remove all odd numbers from the array 
 and output the size of the changed array and all its elements.
 */
export function F(N: number, A: number[]) {
  let i = 0;
  let j = 0;
  let B = [];

  for (i = 0; i <= N - 1; i++) {
    if (A[i] % 2 == 0) {
      B[j] = A[i];
      j = j + 1;
    }
  }

  for (i = 0; i <= j - 1; i++) {
    A[i] = B[i];
  }

  for (i = N - 1; i >= j; i--) {
    A.pop();
  }

  return [j, A];
}
