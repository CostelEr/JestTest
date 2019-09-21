/**
 Array 116. 
    An array A of N integers is given. A group of successive array elements 
    with equal values is called a series of equal numbers, the amount of its 
    elements is called a length of series (a length of series may be equal to 1), 
    the value of its elements is called a value of series. Create and output 
    two new integer-valued arrays B and C containing respectively lengths and 
    values of all series of equal numbers of the array A.
 */
export function F(N: number, A: number[]) {
  let i = 0;
  let j = 0;
  let B = [];
  let C = [];

  B[j] = 1;
  C[j] = A[0];

  for (i = 1; i <= N - 1; i++) {
    if (A[i] == A[i - 1]) {
      B[j] = B[j] + 1;
    } else {
      console.log(C);
      console.log(B);
      j = j + 1;
      C[j] = A[i];
      B[j] = 1;
    }
  }

  return [B, C];
}
