/**
  A number of month is given (as an integer in the range 1 to 12): 
  1 — January, 2 — February, etc. Output the amount of days in the month for a non-leap year.
 */
export function F(K: number) {
  let D = 0;
  switch (K) {
    case 1:
      D = 31;
      break;
    case 2:
      D = 28;
      break;
    case 3:
      D = 31;
      break;
    case 4:
      D = 30;
      break;
    case 5:
      D = 31;
      break;
    case 6:
      D = 30;
      break;
    case 7:
      D = 31;
      break;
    case 8:
      D = 31;
      break;

    case 9:
      D = 30;
      break;
    case 10:
      D = 31;
      break;
    case 11:
      D = 30;
      break;
    case 12:
      D = 31;
      break;
  }

  return D;
}
