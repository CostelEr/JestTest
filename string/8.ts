/**
  String 8. 
   Given an integer N (> 0) and a character C, 
   output a string that is of length N and contains characters C.
 */

export function F(N: number, C: string) {
  let Q = "";
  let i = 0;
  for (i = 0; i < N; i++) {
    Q = Q + C;
  }
  console.log(Q);
  return Q;
}
