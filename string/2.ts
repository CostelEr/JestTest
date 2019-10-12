/**
  String 2. 
  Given an integer N (32 ≤ N ≤ 126), output a character with the numeric value N in the character set.
 */

export function F(N: number) {
  let C = "";
  C = String.fromCharCode(N);
  console.log(C);

  return C;
}
