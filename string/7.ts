/**
  String 7. 
   Given a nonempty string, output numeric values of its first and last character in the character set.
 */

export function F(C: string) {
  let x = C[0].charCodeAt();
  let y = C[C.length - 1].charCodeAt();
  console.log(x, y);
  return [x, y];
}
