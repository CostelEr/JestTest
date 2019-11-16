/**
  String 57. 
       A string with an English sentence is given. Remove all superfluous blank 
       characters in the string, so that its words were separated by exactly 
       one blank character.
 */

export function F(S: string) {
  let i = 0;
  let k = 0;
  let C = "";

  for (i = 0; i <= S.length - 1; i++) {
    if (S[i] == "\\") {
      C = "";
    } else {
      C = C + S[i];
    }

    console.log(C);
  }

  S = "";
  i = 0;
  while (C[i] != "." && i < C.length) {
    S = S + C[i];
    i++;
  }
  console.log(S);

  return S;
}
