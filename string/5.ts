/**
  String 5. 
   Given an integer N (1 ≤ N ≤ 26), output N last small (that is, lowercase) 
   letters of the English alphabet in inverse order ("z", "y", "x", and so on).
 */

export function F(N: number) {
  let C = "";
  let i = 0;
  let x = "z".charCodeAt();

  for (i = 0; i < N; i++) {
    C = C + String.fromCharCode(x - i);
  }
  console.log(C);
  return C;
}
