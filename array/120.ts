/**
 Array 120. 
    An array of N integers is given. The array contains at least one 
    series of two or more equal numbers. Decrease each series of equal 
    numbers of the array by one element (see the series definition in Array116).
 */
export function F(N: number, A: number[]) {
  let i = 0;
  let j = 0;
  let B = [];

  for (i = 0; i <= N - 2; i++) {
    if (A[i] == A[i + 1]) {
      B[j] = A[i];
      j = j + 1;
    }

    console.log(B);
  }

  return B;
}
