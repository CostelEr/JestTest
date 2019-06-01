/**
 Positive integers A and B (A < B) are given. 
 Output all integers in the range A to B, 
 with an integer of a value K being output K times 
 (for example, the number 3 must be output 3 times).
 */
export function F(A, B: number) {
  let i = 0;
  let j = 0;
  let X = [];
  let k = 0;
  for (i = A; i <= B; i++) {
    for (j = 1; j <= i; j++) {
      X[k] = i;
      k = k + 1;
    }
  }
  return X;
}
