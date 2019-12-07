/**
  String 66.     
 */

export function F(S: string) {
  let i = 0;
  let C = "";
  let x = 0;

  for (i = 1; i <= S.length - 1; i = i + 2) {
    C = C + S[i];
  }

  if (S.length % 2 == 0) {
    x = S.length - 2;
  } else {
    x = S.length - 1;
  }

  for (i = x; i >= 0; i = i - 2) {
    C = C + S[i];
  }

  console.log(C, S.length, x);

  return C;
}
