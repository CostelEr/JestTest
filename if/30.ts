/**
   An integer in the range 1 to 999 is given. Output its description string as: 
   "two-digit even number", "three-digit odd number", etc.
 */
export function F(x: number) {
  let D = " number";
  if (x % 2 == 0) {
    D = " even".concat(D);
  } else {
    D = " odd".concat(D);
  }
  if (x < 10) {
    D = "one-digit".concat(D);
  }
  if (x > 10 && x < 100) {
    D = "two-digit".concat(D);
  }
  if (x > 100 && x < 1000) {
    D = "three-digit".concat(D);
  }
  return D;
}
