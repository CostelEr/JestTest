/**
 Array 134. 
     A set A of N points in the coordinate plane is given 
     (points are determined by their coordinates x, y). 
     Find two points of A with the maximal distance between 
     them and output these points (in ascending order of
     their indices in the set A) and the value of the distance.
 */

interface Point {
  x: number;
  y: number;
}
export function F(N: number, A: Point[]) {
  let R = 0;
  let i = 0;
  let x1 = 0;
  let y1 = 0;
  let x2 = 0;
  let y2 = 0;
  let j = 0;
  let max = 0;
  let p1 = 0;
  let p2 = 0;

  for (j = 0; j <= N - 2; j++) {
    x1 = A[j].x;
    y1 = A[j].y;
    for (i = j + 1; i <= N - 1; i++) {
      x2 = A[i].x;
      y2 = A[i].y;

      R = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));

      if (max < R) {
        max = R;
        p1 = j;
        p2 = i;
      }
    }
  }

  max = parseFloat(max.toFixed(2));
  console.log(A[p1], A[p2], max);

  return [A[p1], A[p2], max];
}
