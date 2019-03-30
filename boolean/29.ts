/**
  Given real numbers x, y, x1, y1, x2, y2, verify the following proposition: 
  "The point (x, y) is inside of the rectangle whose left top vertex is (x1, y1), 
  right bottom vertex is (x2, y2), and sides are parallel to coordinate axes".
 */
export function Condition(x, y, x1, y1, x2, y2: number) {
  var D: boolean = x > x1 && x < x2 && y > y2 && y < y1;
  return D;
}
