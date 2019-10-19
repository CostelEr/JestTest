import { isSwitchCase } from "@babel/types";

/**
  String 19. 
   A string is given. If the string represents an integer then output 1, 
   if the string represents a real number (with nonzero fractional part) 
   then output 2, otherwise output 0. A fractional part of a real number 
   is preceded by the decimal point ".".
 */

export function F(C: string) {
  let i = 0;
  let RQ = 1;
  let x = C.length;
  let p = 0;
  if ((C[0] <= "9" && C[0] >= "0") || C[0] == "-" || C[0] == ".") {
    if (C[0] == ".") {
      p = p + 1;
      RQ = 2;
    }
    for (i = 1; i <= x - 1; i++) {
      console.log(C[i], i, p);
      if (C[i] == ".") {
        p = p + 1;
        RQ = 2;
      }
      if (p > 1 || (C[i] > "9" || (C[i] < "0" && C[i] != "."))) {
        RQ = 0;
        i = x + 1;
      }
    }
  } else {
    RQ = 0;
  }

  return RQ;
}
