/**
   Given three real numbers, output the value between the minimum and the maximum.
 */
export function F(x, y, z: number) {
  var middle = z;
  if ((x < y && x > z) || (x > y && x < z)) {
    middle = x;
  }
  if ((y < x && y > z) || (y > x && y < z)) {
    middle = y;
  }
  return middle;
}
