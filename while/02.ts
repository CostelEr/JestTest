/**
   Two positive real numbers A and B (A > B) are given. 
   A segment of length A contains the greatest possible 
   amount of segments of length B (without overlaps). 
   Not using multiplication and division, find the amount of segments B, 
   which are placed on the segment A.
 */
export function F(A, B: number) {
  let X = 0;
  let k = 0;

  do {
    X = X + B;
    k = k + 1;
  } while (X <= A);
  if (X > A) {
    k = k - 1;
  }
  return k;
}
