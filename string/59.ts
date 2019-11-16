/**
  String 59. 
       A string that contains a fully qualified path name 
       (that is, the drive and directory parts, the file name and extension) 
       is given. Extract the extension (without the preceding dot character) 
       from the string.
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
  let p = 0;
  i = 0;
  for (i = 0; i <= C.length - 1; i++) {
    if (C[i] == ".") {
      S = "";
      p = 1;
    } else {
      S = S + C[i];
    }
  }
  if (p == 0) {
    S = "";
  }
  console.log(S);

  return S;
}
