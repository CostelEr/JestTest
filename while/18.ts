/**
    Given an integer N (> 0), find the amount and the sum of its digits. 
    Use the operators of integer division and 
    taking the remainder after integer division.
 */
export function F(N: number) {
  let k = N;
  let i = 0;
  let sum = 0;
  while (k >= 1) {
    sum = sum + (k % 10);
    i = i + 1;
    k = Math.trunc(k / 10);
  }

  return [i, sum];
}
