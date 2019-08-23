/**
 Array 64
 */
export function F(
  NA: number,
  A: number[],
  NB: number,
  B: number[],
  NC: number,
  C: number[]
) {
  let D = [];
  let i = 0;
  let j = 0;
  let k = 0;

  for (i = 0; i <= NA - 1; i++) {
    D[k] = A[i];
    k = k + 1;
  }
  for (i = 0; i <= NB - 1; i++) {
    D[k] = B[i];
    k = k + 1;
  }
  for (i = 0; i <= NC - 1; i++) {
    D[k] = C[i];
    k = k + 1;
  }

  k = NA + NB + NC;

  for (i = 0; i <= k - 2; i++) {
    for (j = i + 1; j <= k - 1; j++) {
      if (D[i] < D[j]) {
        [D[i], D[j]] = [D[j], D[i]];
      }
    }
  }

  return D;
}
