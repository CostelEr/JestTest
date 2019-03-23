/**
 Given two integers A and B, verify the following proposition: 
 "Each of the numbers A and B is odd".
 */
export function Condition(A, B: number) {
  var C: boolean = Math.abs(A % 2) == 1 && Math.abs(B % 2) == 1;
  return C;
}
