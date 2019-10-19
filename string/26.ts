import { truncate } from "fs";
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from "constants";

/**
  String 26. 
    An integer N (> 0) and a string S are given. 
    Transform the string S to a new string of length N as follows: 
    if the length of S is greater than N then remove its first characters, 
    if the length of S is less than N then add characters "." to the beginning of S.
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
