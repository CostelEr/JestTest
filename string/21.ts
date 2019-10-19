import { isSwitchCase } from "@babel/types";

/**
  String 21. 
   Given a positive integer, output all digit characters 
   in the decimal representation of the integer (from right to left).
 */

export function F(N: number) {
  let i = 0;
  let j = 0;
  let B = [];
  let C = N.toString();
  let x = C.length;

  for (i = x - 1; i >= 0; i--) {
    B[j] = C[i];
    console.log(j, B[j]);
    j = j + 1;
  }

  return B;
}
