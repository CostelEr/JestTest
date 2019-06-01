/**
 Given an integer N (> 0), find the sum
  1N + 2N−1 + … + N1.
  To avoid the integer overflow, compute the sum using real variables and output the result as a real number.
 */
export function F(N: number) {
  let i = 0;
  let j = 0;
  let sum = 0;
  let sum1 = 0;
  for (i = 1; i <= N; i++) {
    sum1 = 1;
    for (j = N - i + 1; j >= 1; j--) {
      sum1 = i * sum1;
    }
    sum = sum + sum1;
  }
  return sum;
}
