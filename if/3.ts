/**
    An integer is given. If the integer is positive then decrease it by 8, 
    if the integer is negative then increase it by 6, 
    if the integer equals 0 then change it to 10. Output the obtained integer.
 */
export function F(x: number) {
  if (x > 0) {
    x = x - 8;
  } else {
    if (x == 0) {
      x = 10;
    } else {
      x = x + 6;
    }
  }
  return x;
}
