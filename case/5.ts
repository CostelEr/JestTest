/**
  A number of month is given (as an integer in the range 1 to 12): 
  1 — January, 2 — February, etc. Output the amount of days in the month for a non-leap year.
 */
export function F(N, A, B: number) {
  let D = 0;
  switch (N) {
    case 1:
      parseFloat((A + B).toFixed(2));
      break;
    case 2:
      D = parseFloat((A - B).toFixed(2));
      break;
    case 3:
      D = parseFloat((A * B).toFixed(2));
      break;
    case 4:
      D = parseFloat((A / B).toFixed(2));
      break;
  }

  return D;
}
