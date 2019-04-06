/**
 Given a real independent variable x, find the value of a real function f defined as:
 	        	−x,	if x ≤ 0,
    f(x)  = 	x2,	if 0 < x < 2,
 	        	4,	if x ≥ 2.
 */
export function F(x: number) {
  let D = -x;
  if (x > 0 && x < 2) {
    D = Number((x * x).toPrecision(3));
  }
  if (x >= 2) {
    D = 4;
  }
  return D;
}
