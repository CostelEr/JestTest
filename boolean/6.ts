/**
 Given three integers A, B, C, verify the following proposition: 
 "The double inequality A < B < C is fulfilled".
 */
export function Condition(A, B, C: number) {
  var D: boolean = A < B && B < C;
  return D;
}
