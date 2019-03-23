/**
    A three-digit integer is given. Output an integer obtained 
    from the given one by exchange a tens digit and a hundreds digit 
    (for example, 123 will be changed to 213).
 */
export function TH(A: number) {
  var U = A % 10;
  var Z = ((A - U) / 10) % 10;
  var S = Math.trunc(A / 100);
  var B = Z * 100 + S * 10 + U;
  return B;
}
