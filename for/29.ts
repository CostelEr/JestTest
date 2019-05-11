/**
  An integer N (> 1) and two points A, B (A < B) on the real axis are given. 
  The segment [A, B] is divided into N sub-segments of equal length. 
  Output the length H of each sub-segment and then output the sequence of points
  A,    A + H,    A + 2·H,    A + 3·H,    …,    B,
  which forms a partition of the segment [A, B].
 */
export function F(N: number, A: number, B: number) {
  let i = 0;
  let X = [];
  let H = parseFloat(((B - A) / N).toFixed(5));
  X[0] = parseFloat(H.toFixed(5));
  for (i = 0; i <= N; i++) {
    X[i + 1] = parseFloat((A + i * H).toFixed(5));
  }
  return X;
}
