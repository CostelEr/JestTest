import { isSwitchCase } from "@babel/types";

/**
  String 23. 
    Given a string that represents an arithmetic expression of the form 
    "<digit>±< digit>±…±<digit>" with operators "+" and "−" only 
    (for example, "4+7−2−8"), output the value of given expression as an integer.
 */

export function F(C: string) {
  let i = 0;
  let sum = +C[0];
  let x = C.length;
  let semn = 1;

  for (i = 1; i <= x - 2; i++) {
    if (i % 2 == 1) {
      if (C[i] == "+") sum = sum + +C[i + 1];
      if (C[i] == "-") sum = sum - +C[i + 1];
    }
  }
  console.log(sum);

  return sum;
}
