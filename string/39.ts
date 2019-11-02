/**
  String 39. 
    A string with at least one blank character is given. 
    Output the substring of S that contains all characters 
    between the first and the second blank character. 
    If the string S contains only one blank character 
    then output an empty string.
 */

export function F(S: string) {
  let i = 0;
  let k = -1;
  let S1 = "";

  for (i = 0; i <= S.length; i++) {
    if (S[i] == " " && k != -1) {
      S1 = S.substring(k + 1, i);
      console.log(k, S1);
      i = S.length + 1;
    }
    if (S[i] == " " && k == -1) {
      k = i;
    }
  }
  return S1;
}
