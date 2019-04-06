/**
 Given an integer independent variable x, find the value of an integer function f defined as:
    f(x)	 = 	2·x,	if x < −2 or x > 2,
 	         	−3·x	otherwise.
 */
export function F(x: number) {
  let D = -3 * x;
  if (x > 2 || x < -2) {
    D = 2 * x;
  }
  return D;
}
