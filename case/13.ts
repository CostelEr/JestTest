/**
   Elements of a right isosceles triangle are numbered as: 
   1 — leg a, 2 — hypotenuse c = a·(2)1/2, 
   3 — altitude h drawn onto hypotenuse (h = c/2), 4 — area S = c·h/2. 
   The order number of one element and its value (as a real number) are given. 
   Output values of other elements in the same order.
 */
export function F(N, X: number) {
  let D = [];
  let a = X;
  let c = X;
  let h = X;
  let S = X;
  switch (N) {
    case 1:
      c = a * Math.sqrt(2);
      h = c / 2;
      S = (c * h) / 2;
      D[0] = parseFloat(c.toFixed(1));
      D[1] = parseFloat(h.toFixed(1));
      D[2] = parseFloat(S.toFixed(1));
      break;
    case 2:
      a = c / Math.sqrt(2);
      h = c / 2;
      S = (c * h) / 2;
      D[0] = parseFloat(a.toFixed(1));
      D[1] = parseFloat(h.toFixed(1));
      D[2] = parseFloat(S.toFixed(1));
      break;
    case 3:
      c = 2 * h;
      a = c / Math.sqrt(2);
      S = (c * h) / 2;
      D[0] = parseFloat(a.toFixed(1));
      D[1] = parseFloat(c.toFixed(1));
      D[2] = parseFloat(S.toFixed(1));
      break;
    case 4:
      h = Math.sqrt(S);
      c = 2 * h;
      a = c / Math.sqrt(2);
      D[0] = parseFloat(a.toFixed(1));
      D[1] = parseFloat(c.toFixed(1));
      D[2] = parseFloat(h.toFixed(1));
      break;
  }

  return D;
}
