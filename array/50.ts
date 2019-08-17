/**
 Array50. An array A of N integers is given, the array is a permutation 
 (see the permutation definition in Array49). Find the amount of inversions 
 in this permutation (i. e., the amount of pairs of elements AI and AJ 
 such that I < J and AI > AJ).
 */
export function F(N: number, A: number[]) {
  let i = 0;
  let j = 0;
  let k = 0;

  for (i = 0; i <= N - 2; i++) {
    for (j = i + 1; j <= N - 1; j++) {
      if (A[i] > A[j]) {
        [A[i], A[j]] = [A[j], A[i]];
        k = k + 1;
      }
    }
  }
  return k;
}
