/**
 Array 131. 
    A set A of N points in the coordinate plane and a point B are given 
    (all points are determined by their coordinates x, y). 
    Find the point of A that is the nearest to the point B. 
    The distance R between two points with the coordinates 
    (x1, y1) and (x2, y2) may be found by formula:
    R = ((x2 − x1)2 + (y2 − y1)2)1/2.
 */

interface Point {
  x: number;
  y: number;
}
export function F(N: number, A: Point[], B: Point) {
  let R = [];
  let i = 0;
  let x1 = 0;
  let y1 = 0;
  let x2 = B.x;
  let y2 = B.y;

  for (i = 0; i <= N - 1; i++) {
    x1 = A[i].x;
    y1 = A[i].y;
    R[i] = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
  }

  console.log(R);

  let min = R[0];
  let mini = 0;
  for (i = 0; i <= N - 1; i++) {
    if (min > R[i]) {
      min = R[i];
      mini = i;
    }
  }

  return A[mini];
}
