/**
   A three-digit integer is given. Output its last digit (a ones digit) 
   and then its middle digit (a tens digit).
 */
export function ZU(A: number) {
  let B = [];
  B[0] = A % 10;
  B[1] = ((A - B[0]) / 10) % 10;
  return B;
}
