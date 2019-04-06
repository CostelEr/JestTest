/**
 Given integer coordinates of three vertices of a rectangle 
 whose sides are parallel to coordinate axes, find the coordinates 
 of the fourth vertex of the rectangle.
 */
export function F(x1, y1, x2, y2, x3, y3: number) {
  let x4 = x1;
  if (x2 != x1 && x2 != x3) {
    x4 = x2;
  }
  if (x3 != x1 && x3 != x2) {
    x4 = x3;
  }

  let y4 = y1;
  if (y2 != y1 && y2 != y3) {
    y4 = y2;
  }
  if (y3 != y1 && y3 != y2) {
    y4 = y3;
  }

  return [x4, y4];
}
