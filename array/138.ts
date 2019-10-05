/**
 Array 138. 
      A set A of N points in the coordinate plane is given 
      (N > 2, points are determined by their coordinates x, y). 
      Find the minimal perimeter of a triangle with vertices belonging to A. 
      Output this perimeter and the corresponding vertices 
      (in ascending order of their indices in the set A).
 */

interface Point {
  x: number;
  y: number;
}
export function F(N: number, A: Point[]) {
  let R1 = 0;
  let R2 = 0;
  let R3 = 0;

  let i = 0;
  let j = 0;
  let k = 0;

  let ii = 0;
  let jj = 0;
  let kk = 0;

  let x1 = 0;
  let y1 = 0;
  let x2 = 0;
  let y2 = 0;
  let x3 = 0;
  let y3 = 0;

  let permin = 0;
  let per = 0;

  for (i = 0; i <= N - 3; i++) {
    x1 = A[i].x;
    y1 = A[i].y;

    for (j = i + 1; j <= N - 2; j++) {
      x2 = A[j].x;
      y2 = A[j].y;

      for (k = j + 1; k <= N - 1; k++) {
        x3 = A[k].x;
        y3 = A[k].y;

        R1 = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
        R2 = Math.sqrt((x3 - x1) * (x3 - x1) + (y3 - y1) * (y3 - y1));
        R3 = Math.sqrt((x3 - x2) * (x3 - x2) + (y3 - y2) * (y3 - y2));

        per = R1 + R2 + R3;
        if (permin == 0) {
          permin = per;
        }

        if (permin > per) {
          permin = per;
          ii = i;
          jj = j;
          kk = k;
        }
      }
    }
  }
  permin = parseFloat(permin.toFixed(2));
  console.log(permin, A[ii], A[jj], A[kk]);

  return [permin, A[ii], A[jj], A[kk]];
}
