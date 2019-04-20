/**
   Problem 7
 */
export function F(A, B: number) {
  let i = 0;
  let suma = 0;
  for (i = A; i <= B; i++) {
    suma = suma + i;
  }
  return suma;
}
