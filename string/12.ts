/**
  String 12. 
   Given a nonempty string and an integer N (> 0), output a new string 
   that contains the given string characters separated by N characters "*".
 */

export function F(C: string, N: number) {
  let Q = "";
  let i = 0;

  let C1 = "";
  for (i = 0; i < N; i++) {
    C1 = C1 + "*";
  }

  let x = C.length - 1;
  for (i = 0; i < x; i++) {
    Q = Q + C[i] + C1;
  }
  Q = Q + C[x];
  console.log(Q);
  return Q;
}
