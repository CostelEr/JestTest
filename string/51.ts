import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from "constants";

/**
  String 51. 
      A string that contains English words separated by one or more blank characters is given. 
      All string letters are in uppercase. Output a new string that contains the given words 
      in alphabetic order. The words must be separated by one blank character.
 */

export function F(S: string) {
  let i = 0;
  let k = 0;
  let C = [];
  C[0] = "";
  let m = 0;
  let j = 0;

  for (i = 0; i <= S.length - 2; i++) {
    if (S[i] != " ") {
      C[k] = C[k] + S[i];
    }

    if (S[i] == " " && S[i + 1] != " " && C[k] != "") {
      k = k + 1;
      C[k] = "";
    }

    console.log(k, C[k]);
  }

  if (S[S.length - 1] != " ") {
    C[k] = C[k] + S[i];
  }

  for (j = 0; j <= k; j++) {
    for (i = 1; i <= k; i++) {
      for (m = 0; m <= C[i].length - 1; m++) {
        if (C[i][m] < C[i - 1][m]) {
          [C[i], C[i - 1]] = [C[i - 1], C[i]];
          m = C[i].length + 1;
        }
        if (C[i][m] > C[i - 1][m]) {
          m = C[i].length + 1;
        }
      }
    }
  }

  for (i = 0; i <= k; i++) {
    console.log(i, C[i]);
  }

  S = "";
  for (i = 0; i <= k - 1; i++) {
    S = S + C[i] + " ";
  }
  S = S + C[k];

  console.log(S);
  return S;
}
