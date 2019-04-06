/**
  An integer in the range 1 to 7 is given. Output the name of the respective day of week: 
  1 — "Monday", 2 — "Tuesday", …, 7 — "Sunday".
 */
export function F(x: number) {
  let D = "";
  switch (x) {
    case 1:
      D = "Monday";
      break;
    case 2:
      D = "Tuesday";
      break;
    case 3:
      D = "Wednesday";
      break;
    case 4:
      D = "Thursday";
      break;
    case 5:
      D = "Friday";
      break;
    case 6:
      D = "Saturday";
      break;
    case 7:
      D = "Sunday";
      break;
  }

  return D;
}
