/**
  String 6. 
   A character C representing a digit or a letter of the Latin alphabet is given. 
   If C is a digit then output the string "digit", 
   if C is a capital letter then output the string "capital", otherwise output the string "small".
 */

export function F(C: string) {
  let Q = "";
  if (C >= "0" && C <= "9") {
    Q = "digit";
  }
  if (C >= "A" && C <= "Z") {
    Q = "capital";
  }
  if (C >= "a" && C <= "z") {
    Q = "small";
  }
  if (C >= "а" && C <= "я") {
    Q = "rus";
  }
  if (C >= "А" && C <= "Я") {
    Q = "rus";
  }
  console.log(C, Q);
  return Q;
}
