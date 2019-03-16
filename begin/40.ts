/**
  Solve a system of linear equations
 A1·x + B1·y = C1,
 A2·x + B2·y = C2
 with given coefficients A1, B1, C1, A2, B2, C2 provided that the system has the only solution. 
 Use the following formulas:
 x = (C1·B2 − C2·B1)/D,        y = (A1·C2 − A2·C1)/D, 
 where D = A1·B2 − A2·B1.
 */
export function XY(A1, B1, C1, A2, B2, C2: number) {
  let D;
  D = A1 * B2 - A2 * B1;
  let z = [];
  z[0] = parseFloat(((C1 * B2 - C2 * B1) / D).toFixed(2));
  z[1] = parseFloat(((A1 * C2 - A2 * C1) / D).toFixed(2));
  return z;
}
