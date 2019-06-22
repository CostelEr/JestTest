/**
   A real number A (> 1) is given. Find the smallest 
   integer K such that the sum 1 + 1/2 + … + 1/K is greater than A. 
   Output K and the corresponding sum.
 */
export function F(A: number) {
  let k = 1;
  let sum = k;
  while (sum <= A) {
    k = k + 1;
    sum = sum + 1 / k;
  }
  sum = parseFloat(sum.toFixed(5));
  return [k, sum];
}
