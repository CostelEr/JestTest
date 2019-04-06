/**
 Integer coordinates of a point in the coordinate plane are given. 
 If the point coincides with the origin of coordinates then output 0, 
 otherwise if the point lies on the x-axis or y-axis then output 1 or 2 respectively. 
 If the point does not lie on the coordinate axes then output 3.
 */
export function F(x, y: number) {
  let P = 3;
  if (x == 0 && y == 0) {
    P = 0;
  }
  if (x != 0 && y == 0) {
    P = 1;
  }
  if (y != 0 && x == 0) {
    P = 2;
  }
  return P;
}
