/**
 Problema 26 
 */
export function F(N: number, A: number[]) {
  let i = 0;
  let pr = 0;
  for (i = 1; i <= N - 1; i++) {
    if (A[i] % 2 == A[i - 1] % 2) {
      pr = i + 1;
      i = N;
    }
  }

  return pr;
}
