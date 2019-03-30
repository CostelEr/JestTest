/**
    Three integers are given. 
    Find the amount of positive and amount of negative integers in the input data.
 */
export function F(x, y, z: number) {
  var n = [];
  n[0] = 0;
  n[1] = 0;
  if (x > 0) {
    n[0] = n[0] + 1;
  }
  if (y > 0) {
    n[0] = n[0] + 1;
  }
  if (z > 0) {
    n[0] = n[0] + 1;
  }
  if (x < 0) {
    n[1] = n[1] + 1;
  }
  if (y < 0) {
    n[1] = n[1] + 1;
  }
  if (z < 0) {
    n[1] = n[1] + 1;
  }
  return n;
}
