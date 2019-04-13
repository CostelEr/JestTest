/**
  The units of weight are numbered as: 
  1 — kilogram, 2 — milligram, 3 — gram, 4 — ton, 5 — centner (= 100 kilograms). 
  The order number N of a unit of weight and the mass M of a solid are given 
  (N is an integer in the range 1 to 5, M is a real number). 
  Output the mass of the solid in kilograms.
 */
export function F(N, M: number) {
  let D = 0;
  switch (N) {
    case 1:
      D = M;
      break;
    case 2:
      D = parseFloat((M / 1000000).toFixed(10));
      break;
    case 3:
      D = parseFloat((M / 1000).toFixed(10));
      break;
    case 4:
      D = parseFloat((M * 1000).toFixed(10));
      break;
    case 5:
      D = parseFloat((M * 100).toFixed(10));
      break;
  }

  return D;
}
