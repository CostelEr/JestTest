/**
    Given coordinates x1, y1, x2, y2 of two chessboard squares 
    (as integers in the range 1 to 8), verify the following proposition: 
    "A bishop can move from one square to another during one turn".
 */
export function Condition(x1, y1, x2, y2: number) {
  var D: boolean =
    Math.abs(x2 - x1) == Math.abs(y2 - y1) || (x1 == x2 || y1 == y2);
  return D;
}
