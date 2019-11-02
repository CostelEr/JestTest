/**
  String 38. 
    Three strings S, S1, S2 are given. 
    Replace all occurrences of S1 in the string S by the string S2.
 */

export function F(S, S1, S2: string) {
  let i = 0;
  let x = S.length - S1.length;

  for (i = 0; i <= x; i++) {
    if (S1 == S.substring(i, i + S1.length)) {
      S = S.substring(0, i) + S2 + S.substring(i + S1.length, S.length);
      x = S.length - S1.length;
      console.log(i, S);
      i = i + S2.length - 1;
      console.log(i, S);
    }
  }
  return S;
}
