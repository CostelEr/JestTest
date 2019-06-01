/**
 An integer N (> 0) is given. If it equals 3 raised 
 to some integer power then output True, otherwise output False.
 */
export function F(N: number) {
  let X = 1;
  do {
    X = X * 3;
  } while (X <= N);
  X = X / 3;

  return X == N;
}
