/**
  String 56. 
       A string with an English sentence is given. Output the shortest word in the string. 
       If there are several words of the maximal length then output the last one. 
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

  let min = S.length;
  let mini = 0;
  for (i = 0; i <= k; i++) {
    PC = C[i][C[i].length - 1];
    if (
      PC == "." ||
      PC == "," ||
      PC == "!" ||
      PC == "?" ||
      PC == "-" ||
      PC == ":"
    ) {
      L[i] = C[i].length - 1;
    } else {
      L[i] = C[i].length;
    }
    if (L[i] > 0 && min > L[i]) {
      min = L[i];
      mini = i;
    }
    console.log(i + 1, C[i], L[i]);
  }

  PC = C[mini][C[mini].length - 1];

  if (PC == "." || PC == "," || PC == "!" || PC == "?") {
    C[mini] = C[mini].substr(0, C[mini].length - 1);
  }
  console.log(mini + 1, C[mini]);

  return C[mini];
}
