/**
  Three positive integers A, B, C are given. A rectangle of the size A × B 
  contains the greatest possible amount of inside squares with the side length C 
  (without overlaps). Find the amount of squares placed on the rectangle 
  and the area of unused part of the rectangle.
 */
export function AreaRect(A, B, C: number) {
  let D = [];
  D[0] = Math.trunc(A / C) * Math.trunc(B / C);
  D[1] = A * B - D[0] * C * C;
  return D;
}
