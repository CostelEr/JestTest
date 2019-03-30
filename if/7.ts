/**
    Given two real numbers, output the order number of the smaller of them.
 */
export function F(x, y: number) {
  var z = 0;
  if (x < y) {
    z = 1;
  } else {
    z = 2;
  }
  return z;
}
