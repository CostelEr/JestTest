/**
 Three integers are given. One of them differs from two other equal integers. 
 Output the order number of the integer that differs from the others.
 */
export function F(A, B, C: number) {
  let N = 3;
  if (A != B && A != C) {
    N = 1;
  }
  if (B != A && B != C) {
    N = 2;
  }
  return N;
}
