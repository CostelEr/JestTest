/**
  Given an integer, output its description string as: 
  "negative even number", "zero number", "positive odd number", etc.
 */
export function F(x: number) {
  let D = "zero number";
  if (x > 0) {
    if (x % 2 == 0) {
      D = "positive even number";
    } else {
      D = "positive odd number";
    }
  }

  if (x < 0) {
    if (x % 2 == 0) {
      D = "negative even number";
    } else {
      D = "negative odd number";
    }
  }
  return D;
}
