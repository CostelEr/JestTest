/**
  The units of length are numbered as: 
  1 — decimeter, 2 — kilometer, 3 — meter, 4 — millimeter, 5 — centimeter. 
  The order number N of a unit of length and also the length L of a segment 
  are given (N is an integer in the range 1 to 5, L is a real number). 
  Output the length of the segment in meters.
 */
export function F(N, L: number) {
  let D = 0;
  switch (N) {
    case 1:
      D = parseFloat((L / 10).toFixed(5));
      break;
    case 2:
      D = parseFloat((L * 1000).toFixed(5));
      break;
    case 3:
      D = L;
      break;
    case 4:
      D = parseFloat((L / 1000).toFixed(5));
      break;
    case 5:
      D = parseFloat((L / 100).toFixed(5));
      break;
  }

  return D;
}
