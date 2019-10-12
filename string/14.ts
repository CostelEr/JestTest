/**
  String 14. 
   Given a string, find the amount of Latin capital letters in the string.
 */

export function F(C: string) {
  let Q = "";
  let i = 0;
  let digits = 0;

  let x = C.length - 1;
  for (i = 0; i < x; i++) {
    if (C[i] >= "A" && C[i] <= "Z") {
      digits = digits + 1;
    }
  }

  console.log(digits);
  return digits;
}
