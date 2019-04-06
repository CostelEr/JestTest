/**
 Three points A, B, C on the real axis are given. 
 Determine whether B or C is closer to A. 
 Output the nearest point and its distance from A.
 */
export function F(A, B, C: number) {
  let Point = B;
  let D = parseFloat(Math.abs(B - A).toFixed(2));

  if (Math.abs(C - A) < Math.abs(B - A)) {
    Point = C;
    D = parseFloat(Math.abs(C - A).toFixed(2));
  }
  return [Point, D];
}
