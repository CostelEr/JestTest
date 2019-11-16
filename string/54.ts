import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from "constants";

/**
  String 54. 
      A string with an English sentence is given. 
      Find the amount of vowels ("a", "i", "e", "o", "u") in the string.
 */

export function F(S: string) {
  let i = 0;
  let k = 0;
  let C = [];
  let V = 0;

  for (i = 0; i <= S.length - 1; i++) {
    if (
      S[i] == "a" ||
      S[i] == "A" ||
      S[i] == "i" ||
      S[i] == "I" ||
      S[i] == "e" ||
      S[i] == "E" ||
      S[i] == "o" ||
      S[i] == "O" ||
      S[i] == "u" ||
      S[i] == "U"
    ) {
      V = V + 1;
    }
  }

  return V;
}
