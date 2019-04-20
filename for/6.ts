/**
   Problem 6
 */
export function F(A: number) {
  let i = 0;
  let C = [];
  for (i = 1; i <= 5; i++) {
    C.push(parseFloat(((1 + i * 0.2) * A).toFixed(2)));
  }
  return C;
}
