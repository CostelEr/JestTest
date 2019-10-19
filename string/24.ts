import { isSwitchCase } from "@babel/types";

/**
  String 24. 
    Given a string with the binary representation of a positive integer, 
    output a new string with the decimal representation of this integer.
 */

export function F(C: string) {
  let i = 0;
  let x = C.length;
  let N = 0;
  let j = x - 1;
  let B = "";
  for (i = 0; i <= x - 1; i++) {
    N = N + Math.pow(2, j) * +C[i];
    console.log(N);
    j = j - 1;
  }
  B = N.toString();

  return B;
}
