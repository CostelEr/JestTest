/**
   Given three real numbers, output the minimal value and then the maximal value.
 */
export function F(x, y, z: number) {
  var max = z;
  if (x >= y && x >= z) {
    max = x;
  }
  if (y >= x && y >= z) {
    max = y;
  }

  var min = z;
  if (x <= y && x <= z) {
    min = x;
  }
  if (y <= x && y <= z) {
    min = y;
  }

  return [min, max];
}
