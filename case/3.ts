/**
  A number of month is given (as an integer in the range 1 to 12): 
  1 — January, 2 — February, etc. 
  Output the name of the respective season: "Winter", "Spring", "Summer", "Autumn".
 */
export function F(K: number) {
  let S = "";
  switch (K) {
    case 1:
      S = "Winter";
      break;
    case 2:
      S = "Winter";
      break;
    case 3:
      S = "Spring";
      break;
    case 4:
      S = "Spring";
      break;
    case 5:
      S = "Spring";
      break;

    case 6:
      S = "Summer";
      break;
    case 7:
      S = "Summer";
      break;
    case 8:
      S = "Summer";
      break;

    case 9:
      S = "Autumn";
      break;
    case 10:
      S = "Autumn";
      break;
    case 11:
      S = "Autumn";
      break;
    case 12:
      S = "Winter";
      break;
  }

  return S;
}
