/**
 A real number ε (> 0) is given. A sequence of real numbers AK is defined as:
       A1 = 2,        AK = 2 + 1/AK−1,    K = 2, 3, … .
 Find the first index K such that the inequality |AK − AK−1| < ε is fulfilled. 
 Output the index K and the terms AK−1 and AK.
 */
export function F(E: number) {
  let a = [];
  a[0] = 2;
  let k = 1;
  a[k] = 2 + a[k - 1];

  while (Math.abs(a[k] - a[k - 1]) > E) {
    k = k + 1;
    a[k] = 2 + a[k - 1];
  }
  a[k - 1] = parseFloat(a[k - 1].toFixed(6));
  a[k] = parseFloat(a[k].toFixed(6));
  return [k, a[k - 1], a[k]];
}
