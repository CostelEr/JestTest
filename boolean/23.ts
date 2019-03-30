/**
 Given a four-digit integer, verify the following proposition: 
 "The number is read equally both from left to right and from right to left".
 */
export function Condition(A: number) {
  let B = [];
  B[0] = A % 10;
  B[1] = Math.trunc(A / 10) % 10;
  B[2] = Math.trunc(A / 100) % 10;
  B[3] = Math.trunc(A / 1000);
  var D: boolean = B[0] == B[3] && B[1] == B[2];
  return D;
}
