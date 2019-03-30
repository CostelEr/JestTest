/**
   Given three real numbers, output the sum of two largest values.
 */
export function F(x, y, z: number) {
  var sum = y + z;
  if (x >= z && y >= z) {
    sum = x + y;
  }
  if (x >= y && z >= y) {
    sum = x + z;
  }
  return sum;
}
