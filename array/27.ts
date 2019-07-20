/**
 Problema 27 
 */
export function F(N: number, A: number[]) {
  let i = 0;
  let pr = 0;
  for (i = 1; i <= N - 1; i++) {
    if ((A[i] > 0 && A[i - 1] > 0) || (A[i] < 0 && A[i - 1] < 0)) {
      pr = i + 1;
      i = N;
    }
  }

  return pr;
}
