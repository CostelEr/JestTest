/**
 Given a three-digit integer, verify the following proposition: 
 "All digits of the number are in ascending or descending order".
 */
export function Condition(A: number) {
  let B = [];
  B[0] = A % 10;
  B[1] = ((A - B[0]) / 10) % 10;
  B[2] = Math.trunc(A / 100);
  var D: boolean = (B[0] > B[1] && B[1] > B[2]) || (B[0] < B[1] && B[1] < B[2]);
  return D;
}
