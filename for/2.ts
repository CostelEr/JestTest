/**
   Problem 2
 */
export function F(A, B: number) {
  let i = 0;
  let N = 0;
  let C = [];
  for (i = A; i <= B; i++) {
    C.push(i);
    N = N + 1;
  }
  return [C, N];
}
