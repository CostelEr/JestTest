/**
  String 17. 
   Given a string, convert all Latin & Russian small letters of the string to uppercase.
 */

export function F(C: string) {
  let i = 0;
  let Q = "";
  let x = C.length - 1;

  for (i = 0; i <= x; i++) {
    if ((C[i] >= "а" && C[i] <= "я") || (C[i] >= "a" && C[i] <= "z")) {
      Q = Q + C[i].toUpperCase();
    } else {
      Q = Q + C[i];
    }
  }

  console.log(Q);
  return Q;
}
