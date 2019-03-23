/**
    A three-digit integer is given. Output an integer 
    obtained from the given one by moving its left digit to the right side.
 */
export function LR(A: number) {
  var U = A % 10;
  var Z = ((A - U) / 10) % 10;
  var S = Math.trunc(A / 100);
  var B = Z * 100 + U * 10 + S;
  return B;
}
