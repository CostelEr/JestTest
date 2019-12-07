/**
  String 63.     
 */

export function F(S: string, k: number) {
  let i = 0;
  let x = 0;
  let Letter = "";
  let C = "";

  for (i = 0; i <= S.length - 1; i++) {
    if (S[i] >= "а" && S[i] <= "я") {
      x = S[i].charCodeAt(0) + k;
      if (x > 1103) {
        x = x - "я".charCodeAt(0) + "а".charCodeAt(0) - 1;
      }
      Letter = String.fromCharCode(x);
      console.log(x);
    } else {
      if (S[i] >= "А" && S[i] <= "Я") {
        x = S[i].charCodeAt(0) + k;
        if (x > "Я".charCodeAt(0)) {
          x = x - "Я".charCodeAt(0) + "А".charCodeAt(0) - 1;
        }
        Letter = String.fromCharCode(x);
        console.log(x);
      } else {
        Letter = S[i];
      }
    }
    C = C + Letter;
    console.log(C);
  }

  return C;
}
