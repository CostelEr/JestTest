/**
  Given integer A, verify the following proposition: "The number A is even".
 */
export function Even(A: number) {
  var B: boolean = A % 2 == 0;
  return B;
}
