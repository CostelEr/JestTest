import { truncate } from "fs";
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from "constants";

/**
  String 27. 
    Two positive integers N1, N2 and two strings S1, S2 are given. 
    Output new string that contains N1 first characters of the string 
    S1 and N2 last characters of the string S2 (in that order).
 */

export function F(N1, N2: number, S1, S2: string) {
  let S3 = "";
  S3 = S1.substring(0, N1) + S2.substring(S2.length - N2, S2.length);
  console.log(
    S1.substring(0, N1),
    S2.substring(S2.length - N2, S2.length),
    S2.length,
    S3
  );
  return S3;
}
