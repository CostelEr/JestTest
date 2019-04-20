/**
   Problem 10
 */
export function F(N: number) {
  let i = 0;
  let suma = 0;
  for (i = 1; i <= N; i++) {
    suma = suma + 1 / i;
  }

  return parseFloat(suma.toFixed(6));
}
