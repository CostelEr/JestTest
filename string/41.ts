/**
  String 41. 
     A string that contains English words separated by one or more blank 
     characters is given. Find the amount of words in the string.
 */

export function F(S: string) {
  let i = 0;
  let k = 0;

  for (i = 1; i <= S.length - 1; i++) {
    if (S[i] == " " && S[i - 1] != " ") {
      k = k + 1;
    }
  }

  if (S[S.length - 1] != " ") {
    k = k + 1;
  }

  console.log(k, S[S.length - 1]);
  return k;
}
