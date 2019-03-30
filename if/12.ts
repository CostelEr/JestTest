/**
   Given three real numbers, output the minimal value of them.
 */
export function F(x, y, z: number) {
  var min = z;
  if (x < y && x < z) {
    min = x;
  }
  if (y < x && y < z) {
    min = y;
  }
  return min;
}
