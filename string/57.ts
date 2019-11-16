/**
  String 57. 
       A string with an English sentence is given. Remove all superfluous blank 
       characters in the string, so that its words were separated by exactly 
       one blank character.
 */

export function F(S: string) {
  let i = 0;
  let k = 0;
  let C = [];
  C[0] = "";

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

  S = "";
  for (i = 0; i <= k - 1; i++) {
    S = S + C[i] + " ";
  }
  S = S + C[k];
  console.log(S);

  return S;
}
