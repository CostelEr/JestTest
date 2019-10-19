import { isSwitchCase } from "@babel/types";

/**
  String 22. 
    Given a string that represents a positive integer, 
    output the sum of digits of this integer.
 */

export function F(C: string) {
  let i = 0;
  let sum = 0;
  let x = C.length;

  for (i = 0; i <= x - 1; i++) {
    sum = sum + +C[i];
  }
  console.log(sum);

  return sum;
}
