import { isSwitchCase } from "@babel/types";

/**
  String 18. 
   Given a string, convert all Latin capital letters of the string 
   to lowercase and all Latin small letters of the string to uppercase.
 */

export function F(C: string) {
  let i = 0;
  let Q = "";
  let x = C.length - 1;

  for (i = 0; i <= x; i++) {
    if ((C[i] >= "а" && C[i] <= "я") || (C[i] >= "a" && C[i] <= "z")) {
      Q = Q + C[i].toUpperCase();
    } else {
      if ((C[i] >= "А" && C[i] <= "Я") || (C[i] >= "A" && C[i] <= "Z")) {
        Q = Q + C[i].toLowerCase();
      } else Q = Q + C[i];
    }
  }

  console.log(Q);
  return Q;
}
