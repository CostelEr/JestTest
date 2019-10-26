/**
  String 32. 
    Two strings S, S0 are given. Find the amount of occurrences of S0 in the string S.
 */

export function F(S, S0: string) {
  let RQ = 0;
  let i = 0;
  for (i = 0; i <= S.length - S0.length; i++) {
    console.log(S.substring(i, i + S0.length), S0.length);
    if (S0 == S.substring(i, i + S0.length)) {
      RQ = RQ + 1;
    }
  }
  return RQ;
}
