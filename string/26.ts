import { truncate } from "fs";
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from "constants";

/**
  String 25. 
    Given a string with the decimal representation of a positive integer, 
    output a new string with the binary representation of this integer.
 */

export function F(N: number, C: string) {
  let B = "";
  let i = 0;

  if (N <= C.length) {
    B = C.substring(C.length - N, C.length);
  } else {
    for (i = 0; i < N - C.length; i++) {
      B = B + ".";
    }
    B = B + C;
  }

  console.log(B);

  return B;
}
