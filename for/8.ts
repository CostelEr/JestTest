/**
   Problem 8
 */
export function F(A, B: number) {
  let i = 0;
  let prod = 1;
  for (i = A; i <= B; i++) {
    prod = prod * i;
  }
  return prod;
}
