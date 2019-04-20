/**
   Problem 9
 */
export function F(A, B: number) {
  let i = 0;
  let sumaP = 0;
  for (i = A; i <= B; i++) {
    sumaP = sumaP + i * i;
  }
  return sumaP;
}
