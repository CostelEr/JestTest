/**
 Array 113. 
   An array A of N (≤ 6) real numbers is given. Sort the array in ascending 
   order by using the selection sort method: find the greatest element 
   in the array and exchange the values of the greatest element and the 
   last element (with the order number N); repeat N − 1 times this process, 
   reducing the amount of analyzed elements by 1 after each array pass. 
   Output all array elements after each pass for checking results.
 */
export function F(N: number, A: number[]) {
  let i = 0;
  let j = 0;
  let max = 0;
  let maxi = 0;
  let B = [];

  /*while (j <= N - 2) {
    max = A[j];
    maxi = j;
    i = 0;
    while (i <= N - j - 1) {
      if (A[i] >= max) {
        max = A[i];
        maxi = i;
      }
      i = i + 1;
    }

    [A[N - j - 1], A[maxi]] = [A[maxi], A[N - j - 1]];

    console.log(N - j - 1);
    console.log(maxi);
    console.log(A);
    B[j] = A.slice();
    j = j + 1;
  }*/
  for (j = 0; j <= N - 2; j++) {
    max = A[0];
    maxi = 0;
    for (i = 0; i <= N - j - 1; i++) {
      if (A[i] > max) {
        max = A[i];
        maxi = i;
      }
    }
    [A[N - j - 1], A[maxi]] = [A[maxi], A[N - j - 1]];
    console.log(N - j - 1);
    console.log(maxi);
    console.log(A);
    B[j] = A.slice();
  }

  return B;
}
