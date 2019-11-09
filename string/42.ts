/**
  String 42. 
     A string that contains English words separated by one or 
     more blank characters is given. All string letters are in uppercase. 
     Find the amount of words whose first letter is coincides with the last one.
 */

export function F(S: string) {
  let i = 0;
  let k = -1;
  let kk = 0;
  let C = "";

  for (i = 0; i <= S.length - 1; i++) {
    if (S[i] != " " && k == -1) {
      k = 1;
      C = S[i];
    }

    if (S[i] == " " && k == 1) {
      k = -1;
      if (C == S[i - 1]) {
        kk = kk + 1;
      }
    }
    console.log(C, kk, k, S[i]);
  }

  if (C == S[S.length - 1]) {
    kk = kk + 1;
  }
  console.log(C, kk, k, S[S.length - 1]);
  return kk;
}
