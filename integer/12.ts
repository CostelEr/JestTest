/**
   A three-digit integer is given. 
   Output an integer obtained from the given one by reading it from right to left.
 */
export function Invers(A: number) {
  var U = A % 10;
  var Z = ((A - U) / 10) % 10;
  var S = Math.trunc(A / 100);
  var B = U * 100 + Z * 10 + S;
  return B;
}
