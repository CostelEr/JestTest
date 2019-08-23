/**
 Array 63
 */
export function F(A: number[], B: number[]) {
  let C = [];
  let i = 0;
  let j = 0;

  for (i = 0; i <= 4; i++) {
    C[i * 2] = A[i];
    C[i * 2 + 1] = B[i];
  }

  for (i = 0; i <= 8; i++) {
    for (j = i + 1; j <= 9; j++) {
      if (C[i] > C[j]) {
        [C[i], C[j]] = [C[j], C[i]];
      }
    }
  }

  return C;
}
