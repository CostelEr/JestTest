/**
 Array49. An array of N integers is given. If the array is a permutation 
 (i. e., if the array contains all integers in the range 1 to N) then output 0, 
 otherwise output the order number of the first inadmissible element.
 */
export function F(N: number, A: number[]) {
  let i = 0;
  let j = 0;
  let k1 = 0;
  let k = 0;
  let rpt = 0;
  for (i = 0; i <= N - 1; i++) {
    if (A[i] > N || A[i] < 1) {
      k = i + 1;
      i = N;
    }
  }

  for (i = 0; i <= N - 1; i++) {
    rpt = 0;
    for (j = 0; j <= N - 1; j++) {
      if (A[j] == i + 1) {
        rpt = rpt + 1;
      }
      if (rpt > 1) {
        k1 = j + 1;
        j = N;
        i = N;
      }
    }
  }

  if (k1 != 0 && k != 0) {
    if (k1 < k) {
      k = k1;
    }
  }
  if (k1 != 0 && k == 0) {
    k = k1;
  }

  return k;
}
