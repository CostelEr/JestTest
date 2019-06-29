/**
 A real number ε (> 0) is given. A sequence of real numbers AK is defined as:
 A1 = 1,        A2 = 2,        AK = (AK−2 + 2·AK−1)/3,    K = 3, 4, … .
 Find the first index K such that the inequality |AK − AK−1| < ε is fulfilled. 
 Output the index K and the terms AK−1 and AK.
 */
export function F(E: number) {
  let a = [];
  a[1] = 1;
  a[2] = 2;
  let k = 3;
  a[k] = (a[k - 2] + 2 * a[k - 1]) / 3;

  while (Math.abs(a[k] - a[k - 1]) >= E) {
    k = k + 1;
    a[k] = (a[k - 2] + 2 * a[k - 1]) / 3;
  }
  a[k - 1] = parseFloat(a[k - 1].toFixed(6));
  a[k] = parseFloat(a[k].toFixed(6));
  return [k, a[k - 1], a[k]];
}
