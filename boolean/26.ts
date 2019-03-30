/**
  Given two real numbers x, y, verify the following proposition: 
  "The point with coordinates (x, y) is in the fourth coordinate quarter".
 */
export function Condition(x, y: number) {
  var D: boolean = x > 0 && y < 0;
  return D;
}
