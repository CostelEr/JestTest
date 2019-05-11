/**
 An integer N (> 0) is given. Using one loop-statement compute the sum
 1! + 2! + 3! + … + N!,
 where N! (N–factorial) is the product of all integers in the range 1 to N:    
 N! = 1·2·…·N. To avoid the integer overflow, 
 compute the sum using real variables and output the result as a real number.
 */
export function F(N: number) {
  let i = 0;
  let NF = 1;
  let S = 0;
  for (i = 1; i <= N; i++) {
    NF = NF * i;
    S = S + NF;
  }
  return S;
}
