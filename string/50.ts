/**
  String 50. 
     A string that contains English words separated by one or more blank 
     characters is given. Output a new string that contains the given words 
     in inverse order. The words must be separated by one blank character.
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

    console.log(k, C[k]);
  }

  if (S[S.length - 1] != " ") {
    C[k] = C[k] + S[i];
  }

  S = "";
  for (i = k; i >= 1; i--) {
    S = S + C[i] + " ";
    console.log(i, C[i]);
  }
  S = S + C[0];

  console.log(S);
  return S;
}
