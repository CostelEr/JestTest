/**
    An integer is given. If the integer is positive then decrease it by 8, 
    otherwise increase it by 6. Output the obtained integer.
 */
export function F(x: number) {
  if (x > 0) {
    x = x - 8;
  } else {
    x = x + 6;
  }
  return x;
}
