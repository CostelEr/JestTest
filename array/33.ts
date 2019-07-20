/**
 Problema 33
 */
export function F(N: number, A: number[]) {
  let i = 0;
  let maxL = 0;
  if (A[N - 1] > A[N - 2]) {
    maxL = N;
  } else {
    maxL = 1;
    for (i = N - 2; i >= 1; i--) {
      if (A[i] > A[i - 1] && A[i] > A[i + 1]) {
        maxL = i + 1;
        i = 0;
      }
    }
  }

  return maxL;
}
