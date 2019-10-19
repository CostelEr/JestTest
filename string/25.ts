import { truncate } from "fs";
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from "constants";

/**
  String 25. 
    Given a string with the decimal representation of a positive integer, 
    output a new string with the binary representation of this integer.
 */

export function F(C: string) {
  let N = +C;
  let B = "";

  while (N >= 1) {
    B = B + (N % 2).toString();
    N = Math.trunc(N / 2);
    console.log(B);
  }

  let i = 0;
  let D = "";
  for (i = B.length - 1; i >= 0; i--) {
    D = D + B[i];
  }

  console.log(B, D);
  return D;
}
