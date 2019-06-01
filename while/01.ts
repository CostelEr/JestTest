/**
   Two positive real numbers A and B (A > B) are given. A segment of length A contains the greatest possible amount of segments of length B (without overlaps). Not using multiplication and division, find the length of unused part of the segment A.
 */
export function F(A, B: number) {
  let X = 0;

  do {
    X = X + B;
  } while (X <= A);

  return parseFloat((A - (X - B)).toFixed(2));
}
