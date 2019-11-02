/**
  String 36. 
    Three strings S, S1, S2 are given. 
    Replace the first occurrence of S1 in the string S by the string S2.
 */

export function F(S, S1, S2: string) {
  let i = 0;
  let x = S.length - S1.length;
  let S3 = "";

  for (i = 0; i <= x; i++) {
    if (S1 == S.substring(i, i + S1.length)) {
      S3 = S.substring(0, i) + S2 + S.substring(i + S1.length, S.length);
      console.log(i, S.substring(i + S1.length, S.length));
      i = x + 1;
    }
  }
  return S3;
}
