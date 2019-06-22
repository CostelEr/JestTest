/**
     An integer N (> 0) is given. Output an integer obtained 
     from the given one by reading it from right to left. 
     Use the operators of integer division and taking 
     the remainder after integer division.
 */
export function F(N: number) {
  let k = N;
  let i = 1;
  while (k >= 1) {
    i = i * 10;
    k = Math.trunc(k / 10);
  }
  let invers = 0;
  k = N;
  while (k >= 1) {
    i = i / 10;
    invers = invers + (k % 10) * i;
    k = Math.trunc(k / 10);
  }
  return invers;
}
