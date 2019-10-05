/**
 Array 140. 
      A set A of N points with integer-valued coordinates x, y is given. 
      The order in the plane is defined as follows:
      (x1, y1) < (x2, y2),    if either x1 + y1 < x2 + y2 or x1 + y1 = x2 + y2 and x1 < x2.
      Using this order definition, rearrange points of A in descending order.
 */

interface Point {
  x: number;
  y: number;
}
export function F(N: number, A: Point[]) {
  let i = 0;
  let j = 0;

  for (i = 0; i <= N - 2; i++) {
    for (j = i + 1; j <= N - 1; j++) {
      if (
        A[i].x + A[i].y < A[j].x + A[j].y ||
        (A[i].x + A[i].y == A[j].x + A[j].y && A[i].x < A[j].x)
      ) {
        [A[i], A[j]] = [A[j], A[i]];
      }
    }
    console.log(A);
  }

  return A;
}
