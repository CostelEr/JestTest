/**
  String 28. 
    Given a character C and a string S, double each occurrence of the character C in the string S.
 */

export function F(C: string, S: string) {
  let S1 = "";
  let i = 0;

  for (i = 0; i <= S.length - 1; i++) {
    S1 = S1 + S[i];
    if (S[i] == C) {
      S1 = S1 + C;
    }
    console.log(S1);
  }
  return S1;
}
