/**
   A three-digit integer is given. Find the sum and the product of its digits.
 */
export function SP(A: number) {
  let B = [];
  var U = A % 10;
  var Z = ((A - U) / 10) % 10;
  var S = Math.trunc(A / 100);
  B[0] = U + Z + S;
  B[1] = U * Z * S;
  return B;
}
