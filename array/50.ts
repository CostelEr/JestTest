/**
 Array49. An array of N integers is given. If the array is a permutation 
 (i. e., if the array contains all integers in the range 1 to N) then output 0, 
 otherwise output the order number of the first inadmissible element.
 */
export function F(N: number, A: number[]) {
  let i = 0;
  let j = 0;
  let k = 0;

  for (i = 0; i <= N - 1; i++) {
    k = i + 1;
    for (j = i; j <= N - 1; j++) {
      if (A[j] == i + 1) {
        [A[i], A[j]] = [A[j], A[i]];
        k = 0;
        j = N;
      }
    }
    if (k != 0) {
      i = N;
    }
  }
  return k;
}
