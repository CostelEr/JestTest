/**
  String 60. 
    A string that contains a fully qualified path name 
    (that is, the drive and directory parts, the file name and extension) 
    is given. Extract the first directory name (without backslashes "\") 
    from the string. If the file with the given name is located 
    in the root directory then output a backslash.
 */

export function F(S: string) {
  let i = 0;
  let k = 0;
  let C = [];

  for (i = 0; i <= S.length - 1; i++) {
    if (S[i] != "\\") {
      C[k] = C[k] + S[i];
    }

    if (S[i] == "\\") {
      k = k + 1;
      C[k] = "";
    }
    console.log(k, C[k]);
  }

  for (i = 0; i <= k; i++) {}
  if (k == 1) {
    C[k - 1] = "\\";
  }

  return C[k - 1];
}
