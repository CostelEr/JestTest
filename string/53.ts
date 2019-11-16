import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from "constants";

/**
  String 53. 
      A string with an English sentence is given. Find the amount of punctuation marks in the string.
 */

export function F(S: string) {
  let i = 0;
  let k = 0;
  let C = [];
  C[0] = "";
  let Z = 0;
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
    PC = C[i][C[i].length - 1];
    console.log(PC);
    if (
      PC == "." ||
      PC == "," ||
      PC == "-" ||
      PC == "!" ||
      PC == "?" ||
      PC == "'" ||
      PC == '"'
    ) {
      Z = Z + 1;
    }
  }

  return Z;
}
