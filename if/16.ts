/**
  The values of three real variables A, B, C are given. 
  If the values are in ascending order then double them, otherwise replace the value 
  of each variable by its opposite value. Output the new values of the variables A, B, C.
 */
export function F(A, B, C: number) {
  if (A < B && B < C) {
    A = A * 2;
    B = B * 2;
    C = C * 2;
  } else {
    A = -A;
    B = -B;
    C = -C;
  }
  return [A, B, C];
}
