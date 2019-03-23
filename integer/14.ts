/**
    A three-digit integer is given. 
    Output an integer obtained from the given one by moving its right digit to the left side.
 */
export function LR(A: number) {
  var U = A % 10;
  var Z = ((A - U) / 10) % 10;
  var S = Math.trunc(A / 100);
  var B = U * 100 + S * 10 + Z;
  return B;
}
