/**
   The values of two integer variables A and B are given. 
   If the values are not equal then assign the larger value to each variable, 
   otherwise assign zero value to each variable. Output the new values of the variables A and B.
 */
export function F(A, B: number) {
  if (A == B) {
    A = 0;
    B = 0;
  }

  if (A > B) {
    B = A;
  }

  if (B > A) {
    A = B;
  }
  return [A, B];
}
