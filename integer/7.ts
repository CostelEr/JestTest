/**
    A two-digit integer is given. Find the sum and the product of its digits.
 */
export function SP(A: number) {
  let B = [];
  B[0] = Math.trunc(A / 10) + (A % 10);
  B[1] = Math.trunc(A / 10) * (A % 10);
  return B;
}
