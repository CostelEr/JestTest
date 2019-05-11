/**
   Given an integer N (> 0), find the value of the following 
   expression of N terms with alternating signs:
   1.1 − 1.2 + 1.3 − … .
   Do not use conditional statements.
 */
export function F(N: number) {
  let i = 0;
  let prod = 1;
  for (i = 1; i <= N; i++) {
    prod = prod * (1 + i * 0.1);
  }
  return parseFloat(prod.toFixed(6));
}
