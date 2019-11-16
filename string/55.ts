/**
  String 55. 
       A string with an English sentence is given. Output the longest word in the string. 
       If there are several words of the maximal length then output the first one. 
       A word is defined as a character sequence that does not contain blank characters, 
       punctuation marks and is bounded by blank characters, 
       punctuation marks or the string beginning/end.
 */

export function F(S: string) {
  let i = 0;
  let k = 0;
  let C = [];
  C[0] = "";
  let L = [];
  let PC = "";

  for (i = 0; i <= S.length - 2; i++) {
    if (S[i] != " ") {
      C[k] = C[k] + S[i];
    }

    if (S[i] == " " && S[i + 1] != " " && C[k] != "") {
      k = k + 1;
      C[k] = "";
    }
  }

  if (S[S.length - 1] != " ") {
    C[k] = C[k] + S[i];
  }

  let max = 0;
  let maxi = 0;
  for (i = 0; i <= k; i++) {
    PC = C[i][C[i].length - 1];
    if (PC == "." || PC == "," || PC == "!" || PC == "?") {
      L[i] = C[i].length - 1;
    } else {
      L[i] = C[i].length;
    }
    if (max < L[i]) {
      max = L[i];
      maxi = i;
    }
    console.log(i + 1, C[i], L[i]);
  }

  PC = C[maxi][C[maxi].length - 1];

  if (PC == "." || PC == "," || PC == "!" || PC == "?") {
    C[maxi] = C[maxi].substr(0, C[maxi].length - 1);
  }
  console.log(maxi + 1, C[maxi]);

  return C[maxi];
}
