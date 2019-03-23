/**
 Given two integers A and B, verify the following proposition: 
 "The numbers A and B have equal parity".
 */
export function Condition(A, B: number) {
  var C: boolean =
    (A % 2 == 0 && B % 2 == 0) ||
    (Math.abs(A % 2) == 1 && Math.abs(B % 2) == 1);
  return C;
}
