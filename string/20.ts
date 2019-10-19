import { isSwitchCase } from "@babel/types";

/**
  String 20. 
   Given a positive integer, output all digit characters in the decimal 
   representation of the integer (from left to right).
 */

export function F(N: number) {
  let i = 0;
  let B = [];
  let C = N.toString();
  let x = C.length;

  for (i = 0; i <= x - 1; i++) {
    B[i] = C[i];
  }

  return B;
}
