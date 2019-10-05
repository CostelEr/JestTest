/**
 Array 133. 
     A set A of N points in the coordinate plane is given 
     (points are determined by their coordinates x, y). 
     Find the point of A that lies in the first or the third 
     coordinate quarter and is the nearest to the origin. 
     If the set A does not contain such points 
     then output the origin (0, 0).
 */

interface Point {
  x: number;
  y: number;
}
export function F(N: number, A: Point[]) {
  let R = [];
  let i = 0;
  let x1 = 0;
  let y1 = 0;
  let j = 0;
  let min = 0;
  let mini = 0;

  for (i = 0; i <= N - 1; i++) {
    if ((A[i].x < 0 && A[i].y < 0) || (A[i].x > 0 && A[i].y > 0)) {
      x1 = A[i].x;
      y1 = A[i].y;
      R[j] = Math.sqrt(x1 * x1 + y1 * y1);
      if (j == 0) {
        min = R[j];
        mini = i;
      }
      if (min > R[j]) {
        min = R[j];
        mini = i;
      }
      j = j + 1;
    }
  }

  A[0] = A[mini];
  if (j == 0) {
    A[0] = { x: 0, y: 0 };
  }

  console.log(R);
  console.log(A[0], j);

  return A[0];
}
