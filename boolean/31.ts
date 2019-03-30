/**
   Given three integers a, b, c that are the sides of a triangle, 
   verify the following proposition: 
   "The triangle with sides a, b, c is isosceles".
 */
export function Condition(a, b, c: number) {
  var D: boolean = a == b || a == c || b == c;
  return D;
}
