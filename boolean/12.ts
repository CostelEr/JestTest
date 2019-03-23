/**
 Given three integers A, B, C, verify the following proposition: 
 "Each of the numbers A, B, C is positive".
 */
export function Condition(A, B, C: number) {
  var D: boolean = A > 0 && B > 0 && C > 0;
  return D;
}
