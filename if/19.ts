/**
 Four integers are given. One of them differs from three other equal integers. 
 Output the order number of the integer that differs from the others.
 */
export function F(A, B, C, D: number) {
  let N = 4;
  if (A != B && A != C) {
    N = 1;
  }
  if (B != A && B != C) {
    N = 2;
  }
  if (C != A && C != B) {
    N = 3;
  }
  return N;
}
