/**
   An integer N (> 1) is given. Find the smallest integer K such 
   that the sum 1 + 2 + … + K is greater than or equal to N. 
   Output K and the corresponding sum.
 */
export function F(N: number) {
  let k = 1;
  let sum = k;
  while (sum < N) {
    k = k + 1;
    sum = sum + k;
  }
  return [k, sum];
}
