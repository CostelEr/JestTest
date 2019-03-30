/**
    Given two real numbers, output the larger value and then the smaller value of them.
 */
export function F(x, y: number) {
  var z = [];
  if (x > y) {
    z[0] = x;
    z[1] = y;
  } else {
    z[0] = y;
    z[1] = x;
  }
  return z;
}
