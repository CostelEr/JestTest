/**
  Three real numbers A, B, C are given (A is not equal to 0). 
  By means of a discriminant D = B2 − 4·A·C, verify the following proposition: 
  "The quadratic equation A·x2 + B·x + C = 0 has real roots".
 */
export function Condition(A, B, C: number) {
  B * B - 4 * A * C;
  var D: boolean = B * B - 4 * A * C >= 0;
  return D;
}
