/**
   Given an integer N (> 1), find the largest 
   integer K such that the inequality 3K < N is fulfilled.
 */
export function F(N: number) {
  let k = 0;
  let x = 1;
  while (x < N) {
    k = k + 1;
    x = x * 3;
  }
  return k - 1;
}
