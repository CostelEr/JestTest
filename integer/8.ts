/**
   A two-digit integer is given. Output an integer obtained from the given one by exchange of its digits.
 */
export function Change(A: number) {
  return Number(Math.trunc(A / 10) + (A % 10) * 10);
}
