/**
 An integer N (> 1), the first term A and the common ratio R of a geometric sequence 
 are given (A and D are real numbers). Create and output an array of N real numbers 
 that are the initial terms of this sequence:
  A,    A·R,    A·R2,    A·R3,    … . 
 */
export function F(N, A, R: number) {
  let b = [];
  let i = 0;
  for (i = 0; i <= N - 1; i++) {
    b[i] = parseFloat((A * Math.pow(R, i)).toFixed(2));
  }
  return b;
}
