/**
  Given two integers A and B, verify the following proposition: 
  "The inequalities A > 2 and B ≤ 3 both are fulfilled".
 */
export function Condition(A, B: number) {
  var C: boolean = A > 2 && B <= 3;
  return C;
}
