/**
  Given integer A, verify the following proposition: "The number A is odd".
 */
export function Odd(A: number) {
  var B: boolean = Math.abs(A % 2) == 1;
  return B;
}
