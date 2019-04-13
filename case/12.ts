/**
   Elements of a circle are numbered as: 
   1 — radius R, 2 — diameter D = 2·R, 
   3 — length L = 2·π·R of the circumference, 4 — area S = π·R2. 
   The order number of one element and its value (as a real number) are given. 
   Output values of other elements in the same order. Use 3.14 for a value of π.
 */
export function F(N, X: number) {
  let D = [];
  let R = X;
  switch (N) {
    case 1:
      D[0] = parseFloat((2 * R).toFixed(1));
      D[1] = parseFloat((2 * 3.141592 * R).toFixed(1));
      D[2] = parseFloat((3.141592 * R * R).toFixed(1));
      break;
    case 2:
      R = X / 2;
      D[0] = parseFloat(R.toFixed(1));
      D[1] = parseFloat((2 * 3.141592 * R).toFixed(1));
      D[2] = parseFloat((3.141592 * R * R).toFixed(1));
      break;
    case 3:
      R = X / (2 * 3.141592);
      D[0] = parseFloat(R.toFixed(1));
      D[1] = parseFloat((2 * R).toFixed(1));
      D[2] = parseFloat((3.141592 * R * R).toFixed(1));
      break;
    case 4:
      R = Math.sqrt(X / 3.141592);
      D[0] = parseFloat(R.toFixed(1));
      D[1] = parseFloat((2 * R).toFixed(1));
      D[2] = parseFloat((2 * 3.141592 * R).toFixed(1));
      break;
  }

  return D;
}
