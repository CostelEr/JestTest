/**
  Given an integer N (> 0), find the largest integer K 
  such that its square is not greater than N: K2 ≤ N. 
  Do not use the operation of extracting a root.
 */
export function F(N: number) {
  let k = 1;
  while (k * k <= N) {
    k = k + 1;
  }
  return k - 1;
}
