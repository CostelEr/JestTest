/**
   Given three integers a, b, c that are the sides of a triangle, 
   verify the following proposition: 
   "The triangle with sides a, b, c is a right triangle".
 */
export function Condition(a, b, c: number) {
  var D: boolean =
    a * a + b * b == c * c || b * b + c * c == a * a || a * a + c * c == b * b;
  return D;
}
