/**
  Integers A and B (A < B) are given. 
  Output all integers in the range A to B, 
  with the number A being output once, 
  the number A + 1 being output twice, and so on.
 */
export function F(A, B: number) {
  let i = 0;
  let j = 0;
  let X = [];
  let k = 0;
  let k1 = 1;
  for (i = A; i <= B; i++) {
    for (j = 1; j <= k1; j++) {
      X[k] = i;
      k = k + 1;
    }
    k1 = k1 + 1;
  }
  return X;
}
