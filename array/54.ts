/**
 Array54°. An array A of N integers is given. Write elements of A whose values 
 are even numbers to a new array B (in the same order) 
 and output the size of array B and all its elements.
 */
export function F(N: number, A: number[]) {
  let B = [];
  let i = 0;
  let k = 0;
  for (i = 0; i <= N - 1; i++) {
    if (A[i] % 2 == 0) {
      B[k] = A[i];
      k = k + 1;
    }
  }

  return [k, B];
}
