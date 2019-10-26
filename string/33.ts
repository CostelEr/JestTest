/**
  String 33. 
    Two strings S, S0 are given. Remove the first occurrence of S0 from the string S. 
    If the string S does not contain required substrings then do not change it.
 */

export function F(S, S0: string) {
  let S1 = S;
  let i = 0;
  for (i = 0; i <= S.length - S0.length; i++) {
    if (S0 == S.substring(i, i + S0.length)) {
      S1 = S.substring(0, i) + S.substring(i + S0.length, S.length);
      console.log(i, S0.length, S.length);
      i = S.length;
    }
  }
  return S1;
}
