/**
 Given positive integers N and K, find the sum
 1K + 2K + … + NK.
 To avoid the integer overflow, compute the sum using real variables and output the result as a real number.
 */
export function F(N, K: number) {
  let i = 0;
  let sum = 0;
  let j = 0;
  let sum1 = 1;
  for (i = 1; i <= N; i++) {
    sum1 = 1;
    for (j = 1; j <= K; j++) {
      sum1 = sum1 * i;
    }
    sum = sum + sum1;
  }
  return sum;
}
