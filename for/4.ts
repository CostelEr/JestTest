/**
   Problem 4
 */
export function F(A: number) {
  let i = 0;
  let C = [];
  for (i = 1; i <= 4; i++) {
    C.push(i * A);
  }
  return C;
}
