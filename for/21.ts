/**
 An integer N (> 0) is given. Using one loop-statement compute the sum
 1 + 1/(1!) + 1/(2!) + 1/(3!) + … + 1/(N!),
 where N! (N–factorial) is the product of all integers in the range 1 to N:    
 N! = 1·2·…·N. The result is an approximate value of the constant e = exp(1).
 */
export function F(N: number) {
  let i = 0;
  let NF = 1;
  let S = 1;
  for (i = 1; i <= N; i++) {
    NF = NF * i;
    S = S + 1 / NF;
  }
  return parseFloat(S.toFixed(8));
}
