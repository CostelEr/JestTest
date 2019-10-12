/**
  String 4. 
   Given an integer N (1 ≤ N ≤ 26), output N first capital (that is, uppercase) 
   letters of the English alphabet ("A", "B", "C", and so on).
 */

export function F(N: number) {
  let C = "";
  let i = 0;
  let x = "A".charCodeAt();
  for (i = 0; i < N; i++) {
    C = C + String.fromCharCode(i + x);
  }
  console.log(C);

  return C;
}
