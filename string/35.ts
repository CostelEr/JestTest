/**
  String 35. 
    Two strings S, S0 are given. Remove all occurrences of S0 from the string S. 
    If the string S does not contain required substrings then do not change it.
 */

export function F(S, S0: string) {
  let S1 = S;
  let i = 0;
  let x = S.length - S0.length;

  for (i = 0; i <= x; i++) {
    if (S0 == S1.substring(i, i + S0.length)) {
      S1 = S1.substring(0, i) + S1.substring(i + S0.length, S1.length);
      x = x - S0.length;
      console.log(S1, x);
    }
  }
  return S1;
}
