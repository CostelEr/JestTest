/**
    The values of two integer variables A and B are given. 
    If the values are not equal then assign the sum of given values to each variable, 
    otherwise assign zero value to each variable. Output the new values of the variables A and B.
 */
export function F(A, B: number) {
  if (A != B) {
    A = A + B;
    B = A;
  } else {
    A = 0;
    B = 0;
  }
  return [A, B];
}
