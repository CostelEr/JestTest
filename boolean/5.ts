/**
  Given two integers A and B, verify the following proposition: 
  "The inequality A ≥ 0 is fulfilled or the inequality B < −2 is fulfilled".
 */
export function Condition(A, B: number) {
  var C: boolean = A >= 0 || B < -2;
  return C;
}
