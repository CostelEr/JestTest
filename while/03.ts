/**
    Two positive integers N and K are given. 
    Using addition and subtraction only, 
    find a quotient of the integer division N on K 
    and also a remainder after this division.
 */
export function F(N, K: number) {
  let X = 0;
  let Y = 0;
  do {
    X = X + K;
    Y = Y + 1;
  } while (X <= N);
  Y = Y - 1;
  X = N - (X - K);
  return [Y, X];
}
