/**
  String 9. 
   Given an even integer N (> 0) and two characters C1, C2, 
   output a string that is of length N, begins with C1, 
   and contains alternating characters C1 and C2.
 */

export function F(N: number, C1: string, C2: string) {
  let Q = "";
  let i = 0;
  for (i = 0; i < N / 2; i++) {
    Q = Q + C1 + C2;
  }
  console.log(Q);
  return Q;
}
