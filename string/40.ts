/**
  String 40. 
    A string with at least one blank character is given. 
    Output the substring of S that contains all characters 
    between the first and the last blank character. 
    If the string S contains only one blank character 
    then output an empty string.
 */

export function F(S: string) {
  let i = 0;
  let k1 = -1;
  let k2 = 0;
  let S1 = "";

  for (i = 0; i <= S.length; i++) {
    if (S[i] == " " && k1 == -1) {
      k1 = i;
      k2 = i;
    }
    if (S[i] == " " && k1 != -1) {
      k2 = i;
    }
  }

  if (k2 != k1) {
    S1 = S.substring(k1 + 1, k2);
  }
  console.log(k1, k2, S1);
  return S1;
}
