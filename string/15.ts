/**
  String 15. 
   Given a string, find the amount of Latin & Russian small letters in the string.
 */

export function F(C: string) {
  let Q = "";
  let i = 0;
  let digits = 0;

  let x = C.length - 1;
  for (i = 0; i <= x; i++) {
    if (C[i] >= "а" && C[i] <= "я") {
      digits = digits + 1;
    }
    if (C[i] >= "a" && C[i] <= "z") {
      digits = digits + 1;
    }
  }

  console.log(digits);
  return digits;
}
