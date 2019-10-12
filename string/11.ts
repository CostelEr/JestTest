/**
  String 11. 
   Given a nonempty string, output a new string that contains 
   the given string characters separated by a blank character.
 */

export function F(C: string) {
  let Q = "";
  let i = 0;

  let x = C.length - 1;
  for (i = 0; i < x; i++) {
    Q = Q + C[i] + " ";
  }
  Q = Q + C[x];
  console.log(Q);
  return Q;
}
