/**
 Given three integers A, B, C, verify the following proposition: 
 "The number B is between A and C".
 */
export function Condition(A, B, C: number) {
  var D: boolean = (A < B && B < C) || (A > B && B > C);
  return D;
}
