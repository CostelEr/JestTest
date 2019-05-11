/**
 Given an integer N (> 0), compute N2 by means of the formula
 N2 = 1 + 3 + 5 + … + (2·N − 1).
 Output the value of the sum after addition of each term. 
 As a result, squares of all integers in the range 1 to N will be output.
 */
export function F(N: number) {
  let i = 0;
  let N2 = 0;
  let X = [];
  for (i = 1; i <= N; i++) {
    N2 = N2 + 2 * i - 1;
    X[i - 1] = N2;
  }
  return X;
}
