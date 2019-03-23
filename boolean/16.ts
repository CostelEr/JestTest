/**
 Given a positive integer, verify the following proposition: 
 "The integer is a two-digit even number".
 */
export function Condition(A: number) {
  var B: boolean = A > 9 && A < 100 && A % 2 == 0;
  return B;
}
