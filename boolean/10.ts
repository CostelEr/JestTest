/**
 Given two integers A and B, verify the following proposition: 
 "Exactly one of the numbers A and B is odd"
 */
export function Condition(A, B: number) {
  var C: boolean =
    (Math.abs(A % 2) == 1 && B % 2 == 0) ||
    (Math.abs(B % 2) == 1 && A % 2 == 0);
  return C;
}
