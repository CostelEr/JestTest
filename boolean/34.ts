/**
   Given coordinates x, y of a chessboard square (as integers in the range 1 to 8), 
   verify the following proposition: "The chessboard square (x, y) is white". 
   Note that the left bottom square (1, 1) is black.
 */
export function Condition(x, y: number) {
  var D: boolean = (x + y) % 2 == 1;
  return D;
}
