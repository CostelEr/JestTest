/**
  String 47. 
    A string that contains English words separated by one or more blank 
    characters is given. Output a new string that contains the given words 
    (in the same order) separated by one character ".".
 */

export function F(S: string) {
  let i = 0;
  let k = -1;
  let x = 0;
  let C = "";

  for (i = 0; i <= S.length - 1; i++) {
    if (S[i] != " ") {
      x = 1;
      C = C + S[i];
      k = -1;
    }
    if (S[i] == " " && k == -1 && x == 1) {
      C = C + ".";
      k = 1;
    }
    console.log(i + 1, C);
  }

  if (C[C.length - 1] == ".") {
    C = C.substring(0, C.length - 1);
  }
  console.log(i + 1, C);
  return C;
}
