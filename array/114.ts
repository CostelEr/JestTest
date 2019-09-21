/**
 Array 114. 
   An array A of N (≤ 6) real numbers is given. Sort the array in ascending 
   order by using the insertion sort method: compare an element A2 with the 
   first element A1 and exchange their values, if necessary, so that these 
   elements were in ascending order; then move an element A3 to the left (sorted) 
   part of the array, so that three elements were in ascending order; repeat 
   this process for other array elements. Output all array elements after 
   processing of each element (from A2 to AN). Note that it is convenient 
   to assign the array element being processed to an additional array 
   element A0 (the barrier element).
 */
export function F(N: number, A: number[]) {
  let i = 0;
  let j = 0;
  let k = 0;
  let B = [];
  let x = 0;

  if (A[1] < A[0]) {
    [A[1], A[0]] = [A[0], A[1]];
  }
  B[0] = A.slice();
  console.log(A);

  for (i = 2; i <= N - 1; i++) {
    for (j = 0; j <= i - 1; j++) {
      if (A[i] < A[j]) {
        x = A[i];
        for (k = i; k >= j; k--) {
          A[k] = A[k - 1];
        }
        A[j] = x;
        j = i;
      }
    }
    B[i - 1] = A.slice();
    console.log(A);
  }

  return B;
}
