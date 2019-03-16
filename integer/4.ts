/**
   Two positive integers A and B are given (A > B). Segment of length A contains 
   the greatest possible amount of inside segments of length B (without overlaps). 
   Find the amount of segments B placed on the segment A. Use the operator of integer division.
 */
export function BinA(A, B: number) {
  return Math.trunc(A / B);
}
