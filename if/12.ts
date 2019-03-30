/**
   The values of two integer variables A and B are given. 
   If the values are not equal then assign the larger value to each variable, 
   otherwise assign zero value to each variable. Output the new values of the variables A and B.
 */
export function F(x, y, z: number) {
  var min = z;
  if (x < y && x < z) {
    min = x;
  }
  if (y < x && y < z) {
    min = y;
  }
  return min;
}
