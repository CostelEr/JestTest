/**
   Given three integers a, b, c, verify the following proposition: 
   "A triangle with the sides a, b, c exists".
 */
export function Condition(a, b, c: number) {
  var D: boolean = a < b + c && b < a + c && c < b + a;
  return D;
}
