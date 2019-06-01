/**
 Given an integer N (> 0) that equals 2 raised to some integer power: 
 N = 2K, find the exponent K of the power.
 */
export function F(N: number) {
  let k = 0;
  let x = 1;
  do {
    x = x * 2;
    k = k + 1;
  } while (x <= N);

  return k - 1;
}
