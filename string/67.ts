/**
  String 67.     
 */

export function F(S: string) {
  let i = 0;
  let C = "";
  let x = 0;
  let j = 0;
  x = Math.trunc(S.length / 2);
  if (S.length % 2 == 1) {
    for (i = S.length - 1; i > x; i = i - 1) {
      C = C + S[i];
      C = C + S[j];
      j = j + 1;
    }
    C = C + S[x];
  }
  if (S.length % 2 == 0) {
    for (i = S.length - 1; i >= x; i = i - 1) {
      C = C + S[i];
      C = C + S[j];
      j = j + 1;
    }
  }
  console.log(C, x, S.length);

  return C;
}
