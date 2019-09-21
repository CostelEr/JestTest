/**
 Array 112. 
  An array A of N (≤ 6) real numbers is given. Sort the array in ascending 
  order by using the exchange sort method (the bubble sorting): 
  compare each pair of two adjacent elements (A1 and A2, A2 and A3, and so on) 
  and exchange their values in case the left element is greater than the right one; 
  repeat N − 1 times such array pass. Output all array elements after 
  each pass for checking results. Note that the amount of analyzed pairs 
  of the array elements can be reduced by 1 after each pass.
 */
export function F(N: number, A: number[]) {
  let i = 0;
  let j = 0;
  let B = [];

  for (j = 0; j <= N - 2; j++) {
    for (i = 0; i <= N - 2; i++) {
      if (A[i + 1] < A[i]) {
        [A[i], A[i + 1]] = [A[i + 1], A[i]];
      }
    }
    console.log(A);
    B[j] = A.slice();
  }
  /*
  j = 0;
  while (j <= 1) {
    i = 1;
    while (i <= N - 1) {
      if (A[i] < A[i - 1]) {
        [A[i], A[i - 1]] = [A[i - 1], A[i]];
      }
      i = i + 1;
    }
    B[j] = A;
    j = j + 1;
  }*/

  return B;
}
