/**
     An integer N (> 0) is given. Determine whether its decimal 
     representation contains a digit "2" or not, and output True or False respectively. 
     Use the operators of integer division and taking 
     the remainder after integer division.
 */
export function F(N: number) {
  let k = N;
  let Q = false;
  while (k >= 1) {
    if (k % 10 == 2) {
      Q = true;
    }
    k = Math.trunc(k / 10);
  }
  return Q;
}
