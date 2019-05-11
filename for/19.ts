/**
 Given an integer N (> 0), find the value of a following product:
 N! = 1·2·…·N
 (N–factorial). To avoid the integer overflow, 
 compute the product using a real variable 
 and output the result as a real number.
 */
export function F(N: number) {
  let i = 0;
  let NF = 1;
  for (i = 1; i <= N; i++) {
    NF = NF * i;
  }
  return NF;
}
