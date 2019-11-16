/**
  String 58. 
       A string that contains a fully qualified path name (that is, 
        the drive and directory parts, the file name and extension) 
        is given. Extract the file name (without the path and extension) 
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
  i = 0;
  while (C[i] != "." && i < C.length) {
    S = S + C[i];
    i++;
  }
  console.log(S);

  return S;
}
