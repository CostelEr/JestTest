/**
   A three-digit integer is given. Output its last digit (a ones digit) 
   and then its middle digit (a tens digit).
 */
export function ZU(A: number) {
  let B = [];
  B[0] = A % 10;
  B[0] = A - trunc(A / 10) * 10;
  return Math.trunc(A / 100);
}
