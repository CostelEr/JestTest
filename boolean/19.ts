/**
 Verify the following proposition: 
 "Among three given integers there is at least one pair of equal ones".
 */
export function Condition(A, B, C: number) {
  var D: boolean = A / B == -1 || A / C == -1 || B / C == -1;
  return D;
}
