/**
  String 3. 
   Given a character C, output two characters: 
   the first character precedes C in the character set, 
   the second one follows C in the character set.
 */

export function F(C: string) {
  let x = 0;
  x = C.charCodeAt();
  C = String.fromCharCode(x - 1, x + 1);
  console.log(C);

  return C;
}
