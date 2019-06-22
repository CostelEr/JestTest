/**
    Two positive integers A and B are given. Find their greatest common divisor (GCD) 
    using the Euclidean algorithm:
        GCD(A, B) = GCD(B, A mod B),    if B ≠ 0;        GCD(A, 0) = A,
    where "mod" denotes the operator of taking the remainder after integer division.
 */
export function F(A, B: number) {
  if (A < B) {
    [A, B] = [B, A];
  }

  while (A % B != 0) {
    [A, B] = [B, A % B];
  }
  return B;
}
