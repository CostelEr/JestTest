/**
  String 45. 
      A string that contains English words separated by one or more blank 
      characters is given. Find the length of the shortest word.
 */

export function F(S: string) {
  let i = 0;
  let k = 0;
  let min = 0;
  let wrd = 0;

  for (i = 0; i <= S.length - 1; i++) {
    if (S[i] == " " && S[i - 1] != " ") {
      if (min == 0) {
        min = wrd;
      }
      if (wrd < min) {
        min = wrd;
      }
      wrd = 0;
    }
    if (S[i] != " ") {
      wrd = wrd + 1;
    }
    console.log(S[i], wrd);
  }
  if (min == 0) {
    min = wrd;
  }
  if (wrd < min) {
    min = wrd;
  }

  return min;
}
