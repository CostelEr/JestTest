/**
  String 10. 
   Given a string, output a new string that contains 
   the given string characters in inverse order.
 */

export function F(C: string) {
  let Q = "";
  let i = 0;

  let x = C.length - 1;
  for (i = x; i >= 0; i--) {
    Q = Q + C[i];
  }

  console.log(Q);
  return Q;
}
