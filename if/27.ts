/**
  Given a real independent variable x, find the value of an integer function f defined as:

 	 	        0,	if x < 0,
    f(x)	 = 	1,	if x belongs to [0, 1), [2, 3), …,
 	 	       −1,	if x belongs to [1, 2), [3, 4), … .

 */
export function F(x: number) {
  let D = 0;
  if (x >= 0) {
    if (Math.trunc(x) % 2 == 0) {
      D = 1;
    } else {
      D = -1;
    }
  }
  return D;
}
