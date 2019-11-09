/**
  String 49. 
     A string that contains English words separated by one or more blank characters is given. 
     All string letters are in uppercase. Process each word as follows: 
     replace all previous occurrences of its last letter by the character "." 
     (for example, the word "MINIMUM" must be transformed into ".INI.UM"). 
     Do not change blank characters in the string.
 */

export function F(S: string) {
  let i = 0;
  let k = -1;
  let S1 = "";
  let C = "";
  let S2 = "";

  for (i = S.length - 1; i >= 0; i--) {
    if (S[i] == C && k == 1) {
      S1 = S1 + ".";
    }

    if (S[i] != " " && k == -1) {
      C = S[i];
      S1 = S1 + S[i];
      k = 1;
    }

    if (S[i] != C) {
      S1 = S1 + S[i];
    }

    if (S[i] == " ") {
      k = -1;
    }
  }

  for (i = S1.length - 1; i >= 0; i--) {
    S2 = S2 + S1[i];
    console.log(i, S2);
  }
  return S2;
}
