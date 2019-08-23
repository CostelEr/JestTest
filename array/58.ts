/**
 Array58. An array A of N real numbers is given. 
 Create a new array B of the same size; 
 each array element BK must be equal to the sum 
 of elements of A with the order numbers in the range 1 to K.
 */
export function F(N: number, A: number[]) {
  let B = [];
  let i = 0;
  let j = 0;

  for (i = 0; i <= N - 1; i++) {
    B[i] = 0;
    for (j = 0; j <= i; j++) {
      B[i] = B[i] + A[j];
    }
    B[i] = parseFloat(B[i].toFixed(2));
  }

  return B;
}
