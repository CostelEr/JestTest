/**
  Given two integers D (day) and M (month) representing a correct date of a non-leap year, 
  output values D and M for the next date.
 */
export function F(D, M: number) {
  D = D + 1;
  switch (M) {
    case 1:
      if (D == 32) {
        D = 1;
        M = 2;
      }
      break;
    case 2:
      if (D == 29) {
        D = 1;
        M = 3;
      }
      break;
    case 3:
      if (D == 32) {
        D = 1;
        M = 4;
      }
      break;
    case 4:
      if (D == 31) {
        D = 1;
        M = 5;
      }
      break;
    case 5:
      if (D == 32) {
        D = 1;
        M = 6;
      }
      break;
    case 6:
      if (D == 31) {
        D = 1;
        M = 7;
      }
      break;
    case 7:
      if (D == 32) {
        D = 1;
        M = 8;
      }
      break;
    case 8:
      if (D == 32) {
        D = 1;
        M = 9;
      }
      break;
    case 9:
      if (D == 31) {
        D = 1;
        M = 10;
      }
      break;
    case 10:
      if (D == 32) {
        D = 1;
        M = 11;
      }
      break;
    case 11:
      if (D == 31) {
        D = 1;
        M = 12;
      }
      break;
    case 12:
      if (D == 32) {
        D = 1;
        M = 1;
      }
      break;
  }

  return [D, M];
}
