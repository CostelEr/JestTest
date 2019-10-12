/**
  String 13. 
   Given a string, find the amount of digits in the string.
 */

export function F(C: string) {
  let Q = "";
  let i = 0;
  let digits = 0;

  let x = C.length - 1;
  for (i = 0; i < x; i++) {
    if (C[i] >= "0" && C[i] <= "9") {
      digits = digits + 1;
    }
  }

  console.log(digits);
  return digits;
}
