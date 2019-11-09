/**
  String 44. 
      A string that contains English words separated by one or more blank 
      characters is given. All string letters are in uppercase. 
      Find the amount of words containing exactly three letters "A".
 */

export function F(S: string) {
  let i = 0;
  let k = 0;
  let n = 0;
  let n3 = 0;
  let x = -1;

  for (i = 1; i <= S.length; i++) {
    if (S[i] == " " && S[i - 1] != " ") {
      if (n3 == 3) {
        n = n + 1;
      }
      k = k + 1;
      n3 = 0;
    }

    if (S[i] == "A") {
      n3 = n3 + 1;
      console.log(k + 1, S[i], n3);
    }
  }
  if (n3 == 3) {
    n = n + 1;
  }

  return n;
}
