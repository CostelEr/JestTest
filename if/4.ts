/**
   Three integers are given. Find the amount of positive integers in the input data.
 */
export function F(x, y, z: number) {
  var n = 0;
  if (x > 0) {
    n = n + 1;
  }
  if (y > 0) {
    n = n + 1;
  }
  if (z > 0) {
    n = n + 1;
  }
  return n;
}
