/**
  Given an integer N (> 0), compute the double factorial of N:
  N!! = N·(N−2)·(N−4)·…,
  where the last factor equals 2 if N is an even number, and 1 otherwise. 
  To avoid the integer overflow, compute the double factorial using a real 
  variable and output the result as a real number.
 */
export function F(N: number) {
  let k = 1;
  let i = 0;
  let N1 = N;
  while (N1 >= 1) {
    k = k * N1;
    i = i + 1;
    N1 = N - i * 2;
  }

  return k;
}
