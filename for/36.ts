/**
 Given positive integers N and K, find the sum
 1K + 2K + … + NK.
 To avoid the integer overflow, compute the sum using real variables and output the result as a real number.
 */
export function F(N, K: number) {
  let i = 0;
  let sum = 0;
  for (i = 1; i <= N; i++) {
    sum = sum + Math.pow(i, K);
  }
  return sum;
}
