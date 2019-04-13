/**
   Elements of an equilateral triangle are numbered as: 
   1 — side a, 2 — radius R1 of inscribed circle (R1 = a·(3)1/2/6), 
   3 — radius R2 of circumscribed circle (R2 = 2·R1), 4 — area S = a2·(3)1/2/4. 
   The order number of one element and its value (as a real number) are given. 
   Output values of other elements in the same order.
 */
export function F(N, X: number) {
  let D = [];
  let a = X;
  let R1 = X;
  let R2 = X;
  let S = X;
  switch (N) {
    case 1:
      R1 = (a * Math.sqrt(3)) / 6;
      R2 = 2 * R1;
      S = (a * a * Math.sqrt(3)) / 4;
      D[0] = parseFloat(R1.toFixed(1));
      D[1] = parseFloat(R2.toFixed(1));
      D[2] = parseFloat(S.toFixed(1));
      break;
    case 2:
      a = (6 * R1) / Math.sqrt(3);
      R2 = 2 * R1;
      S = (a * a * Math.sqrt(3)) / 4;
      D[0] = parseFloat(a.toFixed(1));
      D[1] = parseFloat(R2.toFixed(1));
      D[2] = parseFloat(S.toFixed(1));
      break;
    case 3:
      R1 = R2 / 2;
      a = (6 * R1) / Math.sqrt(3);
      S = (a * a * Math.sqrt(3)) / 4;
      D[0] = parseFloat(a.toFixed(1));
      D[1] = parseFloat(R1.toFixed(1));
      D[2] = parseFloat(S.toFixed(1));
      break;
    case 4:
      a = Math.sqrt((4 * S) / Math.sqrt(3));
      R1 = (a * Math.sqrt(3)) / 6;
      R2 = 2 * R1;
      D[0] = parseFloat(a.toFixed(1));
      D[1] = parseFloat(R1.toFixed(1));
      D[2] = parseFloat(R2.toFixed(1));
      break;
  }

  return D;
}
