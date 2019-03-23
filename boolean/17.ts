/**
 Given a positive integer, verify the following proposition: 
 "The integer is a three-digit odd number".
 */
export function Condition(A: number) {
  var B: boolean = A > 99 && A < 1000 && Math.abs(A % 2) == 1;
  return B;
}
