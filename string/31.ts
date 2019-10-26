/**
  String 31. 
    Two strings S, S0 are given. If the string S0 is a substring 
    of S then output True, otherwise output False.
 */

export function F(S, S0: string) {
  let RQ = false;
  let i = 0;
  for (i = 0; i <= S.length - S0.length; i++) {
    console.log(S.substring(i, i + S0.length), S0.length);
    if (S0 == S.substring(i, i + S0.length)) {
      RQ = true;
      i = S.length;
    }
  }
  return RQ;
}
