/**
   Problem 11
 */
export function F(N: number) {
  let i = 0;
  let suma = N * N;
  for (i = 1; i <= N; i++) {
    suma = suma + (N + i) * (N + i);
  }
  return suma;
}
