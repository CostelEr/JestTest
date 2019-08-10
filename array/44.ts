/**
 An array of N integers is given, the array contains two elements with equal values. 
 Find these elements and output their order numbers in ascending order.
 */
export function F(N: number, A: number[]) {
  let i = 0;
  let j = 0;
  let k1 = 1;
  let k2 = 2;
  for (i = 0; i <= N - 2; i++) {
    for (j = i + 1; j <= N - 1; j++) {
      if (A[i] == A[j]) {
        k1 = i + 1;
        k2 = j + 1;
        i = N;
        j = N;
      }
    }
  }

  return [k1, k2];
}
