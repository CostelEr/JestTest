/**
    An integer N (> 1) is given. If it is a prime number, i. e., 
    it has not positive divisors except 1 and itself, then output True, 
    otherwise output False.
 */
export function F(N: number) {
  let k = 2;
  let Q = true;
  while (k < N) {
    if (N % k == 0) {
      Q = false;
      k = N;
    }
    k = k + 1;
  }
  return Q;
}
