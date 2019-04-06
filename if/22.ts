/**
 Given coordinates of a point that does not lie on the coordinate axes, 
 find the number of a coordinate quarter containing the point.
 */
export function F(x, y: number) {
  let P = 4;
  if (x > 0 && y > 0) {
    P = 1;
  }
  if (x < 0 && y > 0) {
    P = 2;
  }
  if (x < 0 && y < 0) {
    P = 3;
  }
  return P;
}
