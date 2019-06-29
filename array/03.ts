/**
 An integer N (> 1), the first term A and the common difference D of an 
 arithmetic sequence are given (A and D are real numbers). 
 Create and output an array of N real numbers that are the initial terms of this sequence:
  A,    A + D,    A + 2·D,    A + 3·D,    … .  
 */
export function F(N, A, D: number) {
  let b = [];
  let i = 0;
  for (i = 0; i <= N - 1; i++) {
    b[i] = parseFloat((A + D * i).toFixed(2));
  }
  return b;
}
