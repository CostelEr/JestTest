/**
   Problem 12
 */
export function F(N: number) {
  let i = 0;
  let prod = 1;
  for (i = 1; i <= N; i++) {
    prod = prod * (1 + i * 0.1);
  }
  return parseFloat(prod.toFixed(6));
}
