/**
  String 30. 
    Given a character C and two strings S, S0, insert the string S0 into 
    the string S after each occurrence of the character C.
 */

export function F(C, S, S0: string) {
  let S1 = "";
  let i = 0;

  for (i = 0; i <= S.length - 1; i++) {
    S1 = S1 + S[i];
    if (S[i] == C) {
      S1 = S1 + S0;
    }
    console.log(S1);
  }
  return S1;
}
