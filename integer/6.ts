/**
    A two-digit integer is given. Output its left digit (a tens digit) and 
    then its right digit (a ones digit). Use the operator of integer division 
    for obtaining the tens digit and the operator of taking remainder for obtaining the ones digit.
 */
export function ZU(A: number) {
  let B = [];
  B[0] = Math.trunc(A / 10);
  B[1] = A % 10;
  return B;
}
