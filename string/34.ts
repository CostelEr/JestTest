/**
  String 34. 
    Two strings S, S0 are given. Remove the last occurrence of S0 
    from the string S. If the string S does not contain required 
    substrings then do not change it.
 */

export function F(S, S0: string) {
  let S1 = S;
  let i = 0;
  for (i = S.length - S0.length; i >= 0; i--) {
    if (S0 == S.substring(i, i + S0.length)) {
      S1 = S.substring(0, i) + S.substring(i + S0.length, S.length);
      console.log(i, S0.length, S.length);
      i = -1;
    }
  }
  return S1;
}
