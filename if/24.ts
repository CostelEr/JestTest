/**
 Given a real independent variable x, find the value of a real function f defined as:
    f(x)	 = 	2·sin(x),	if x > 0,
 	              6 − x,	if x ≤ 0.

 */
export function F(x: number) {
  let D = parseFloat((6 - x).toFixed(2));
  if (x > 0) {
    D = parseFloat(2 * Math.sin(x).toFixed(2));
  }
  return D;
}
