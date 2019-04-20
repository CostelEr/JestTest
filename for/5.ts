/**
   Problem 5
 */
export function F(A: number) {
  let i = 0;
  let C = [];
  for (i = 1; i <= 4; i++) {
    C.push(parseFloat((i * 0.1 * A).toFixed(2)));
  }
  return C;
}
