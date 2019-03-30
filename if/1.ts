/**
    An integer is given. If the integer is positive then decrease it by 8, 
    otherwise do not change it. Output the obtained integer.
 */
export function F(x: number) {
  if (x > 0) {
    x = x - 8;
  }
  return x;
}
