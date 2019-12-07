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
  let x = 0;
  let Letter = "";
  let C = "";

  for (i = 0; i <= S.length - 1; i++) {
    if ((S[i] >= "а" && S[i] <= "я") || (S[i] >= "А" && S[i] <= "Я")) {
      x = S[i].charCodeAt(0) + 1;
      if (S[i] == "я") {
        Letter = "а";
      } else {
        if (S[i] == "Я") {
          Letter = "А";
        } else {
          Letter = String.fromCharCode(x);
        }
      }

      console.log(x);
    } else {
      Letter = S[i];
    }
    C = C + Letter;
    console.log(C);
  }

  return C;
}
