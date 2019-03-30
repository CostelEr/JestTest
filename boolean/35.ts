/**
   Given coordinates x1, y1, x2, y2 of two chessboard squares 
   (as integers in the range 1 to 8), verify the following proposition: 
   "Both of the given chessboard squares have the same color".
 */
export function Condition(x1, y1, x2, y2: number) {
  var D: boolean = (x1 + y1) % 2 == (x2 + y2) % 2;
  return D;
}
