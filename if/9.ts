/**
    The values of two real variables A and B are given. 
    Redistribute the values so that A and B have the smaller and the larger value respectively. 
    Output the new values of the variables A and B.
 */
export function F(A, B: number) {
  var C = 0;
  if (A > B) {
    C = A;
    A = B;
    B = C;
  }
  return [A, B];
}
