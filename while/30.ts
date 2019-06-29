/**
 Three positive real numbers A, B, C are given. 
 A rectangle of size A × B contains the greatest 
 possible amount of squares with side C (without overlaps). 
 Find the amount of squares placed on the rectangle. 
 Do not use the operators of multiplication and division.
 */
export function F(A, B, C: number) {
  let k = 0;
  while (k * C <= A) {
    k = k + 1;
  }
  k = k - 1;
  let k1 = 0;
  let k2 = 0;
  while (k1 * C <= B) {
    k1 = k1 + 1;
    k2 = k2 + k;
  }
  k2 = k2 - k;
  return k2;
}
