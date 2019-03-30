/**
    Given two real numbers, output the larger value of them.
 */
export function F(x, y: number) {
  var z = 0;
  if (x > y) {
    z = x;
  } else {
    z = y;
  }
  return z;
}
