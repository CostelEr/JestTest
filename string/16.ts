/**
  String 16. 
   Given a string, convert all Latin capital letters of the string to lowercase.
 */

export function F(C: string) {
  let i = 0;
  let Q = "";
  let x = C.length - 1;

  for (i = 0; i <= x; i++) {
    if (C[i] >= "A" && C[i] <= "Z") {
      Q = Q + C[i].toLowerCase();
    } else {
      Q = Q + C[i];
    }
  }

  console.log(Q);
  return Q;
}
