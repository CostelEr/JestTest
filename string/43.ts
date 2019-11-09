/**
  String 43. 
      A string that contains English words separated by one or more 
      blank characters is given. All string letters are in uppercase. 
      Find the amount of words containing at least one letter "E".
 */

export function F(S: string) {
  let i = 0;
  let k = 0;
  let n = 0;
  let x = -1;

  for (i = 1; i <= S.length; i++) {
    if (S[i] == " " && S[i - 1] != " ") {
      k = k + 1;
    }

    if (S[i] == "A" && x != k) {
      n = n + 1;
      x = k;
      console.log(k + 1, S[i], n);
    }
  }

  return n;
}
