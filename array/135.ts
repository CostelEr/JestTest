/**
 Array 135. 
     Two sets A and B of N1 and N2 points respectively are given 
     (points are determined by their coordinates x, y). 
     Find the point of A and the point of B with the minimal 
     distance between them. Output the value of the distance and 
     then the point of A and the point of B.
 */

interface Point {
  x: number;
  y: number;
}
export function F(N1: number, A: Point[], N2: number, B: Point[]) {
  let R = 0;
  let i = 0;
  let x1 = 0;
  let y1 = 0;
  let x2 = 0;
  let y2 = 0;
  let j = 0;
  let min = 0;
  let p1 = 0;
  let p2 = 0;

  x1 = A[j].x;
  y1 = A[j].y;
  x2 = B[i].x;
  y2 = B[i].y;
  min = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));

  for (j = 0; j <= N1 - 1; j++) {
    x1 = A[j].x;
    y1 = A[j].y;
    for (i = 0; i <= N2 - 1; i++) {
      x2 = B[i].x;
      y2 = B[i].y;

      R = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));

      if (min > R) {
        min = R;
        p1 = j;
        p2 = i;
      }
    }
  }

  min = parseFloat(min.toFixed(2));
  console.log(min, A[p1], B[p2]);

  return [min, A[p1], B[p2]];
}
