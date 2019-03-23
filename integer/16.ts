/**
    A three-digit integer is given. Output an integer obtained 
    from the given one by exchange a ones digit and a tens digit 
    (for example, 123 will be changed to 132).
 */
export function OT(A: number) {
  var U = A % 10;
  var Z = ((A - U) / 10) % 10;
  var S = Math.trunc(A / 100);
  var B = S * 100 + U * 10 + Z;
  return B;
}
