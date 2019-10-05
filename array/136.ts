/**
 Array 136. 
     A set A of N points in the coordinate plane is given 
     (N > 2, points are determined by their coordinates x, y). 
     Find the point of A such that the sum of distances between 
     this point and other points of A is minimal and output 
     this point and the corresponding sum.
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
  let sum = [];

  for (j = 0; j <= N - 1; j++) {
    x1 = A[j].x;
    y1 = A[j].y;
    sum[j] = 0;
    for (i = 0; i <= N - 1; i++) {
      x2 = A[i].x;
      y2 = A[i].y;
      R = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));

      if (i != j) {
        sum[j] = sum[j] + R;
      }
    }
  }

  let min = sum[0];
  let mini = 0;
  for (i = 1; i <= N - 1; i++) {
    if (min > sum[i]) {
      min = sum[i];
      mini = i;
    }
  }

  console.log(A[mini], min);
  min = parseFloat(min.toFixed(2));
  console.log(A[mini], min);

  return [A[mini], min];
}
