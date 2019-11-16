import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from "constants";

/**
  String 52. 
      A string with an English sentence is given. Convert the first letter 
      of each word to uppercase. A word is defined as a character sequence 
      that does not contain blank characters and is bounded by blank characters 
      or the string beginning/end. If the first word character is not a letter 
      then do not change this word.
 */

export function F(S: string) {
  let i = 0;
  let k = 0;
  let C = [];
  C[0] = "";
  let PC = "";

  for (i = 0; i <= S.length - 2; i++) {
    if (S[i] != " ") {
      C[k] = C[k] + S[i];
    }

    if (S[i] == " " && S[i + 1] != " " && C[k] != "") {
      k = k + 1;
      C[k] = "";
    }
  }

  if (S[S.length - 1] != " ") {
    C[k] = C[k] + S[i];
  }

  for (i = 0; i <= k; i++) {
    PC = C[i][0];
    PC = PC.toUpperCase();
    C[i] = PC + C[i].substr(1, C[i].length);
    console.log(i, PC, C[i]);
  }

  S = "";
  for (i = 0; i <= k - 1; i++) {
    S = S + C[i] + " ";
  }
  S = S + C[k];

  console.log(S);
  return S;
}
