/**
   A locator can be focused on the directions 
   "N" (north), "W" (west), "S" (south), "E" (east) 
   and perform three digital instructions: 
   1 — "turn left", −1 — "turn right", 2 — "turn on 180°"). 
   A symbol C (an initial direction of the locator) and two integers N1 and N2 (instructions) are given. 
   Output the direction of the locator (as symbol) after performing the instructions.
 */
export function F(C: string, N1, N2: number) {
  let D = C;
  switch (C) {
    case "N":
      switch (N1) {
        case 1:
          D = "W";
          break;
        case -1:
          D = "E";
          break;
        case 2:
          D = "S";
          break;
      }
      break;

    case "W":
      switch (N1) {
        case 1:
          D = "S";
          break;
        case -1:
          D = "N";
          break;
        case 2:
          D = "E";
          break;
      }
      break;

    case "S":
      switch (N1) {
        case 1:
          D = "E";
          break;
        case -1:
          D = "W";
          break;
        case 2:
          D = "N";
          break;
      }
      break;
    case "E":
      switch (N1) {
        case 1:
          D = "N";
          break;
        case -1:
          D = "S";
          break;
        case 2:
          D = "W";
          break;
      }
      break;
  }

  switch (D) {
    case "N":
      switch (N2) {
        case 1:
          C = "W";
          break;
        case -1:
          C = "E";
          break;
        case 2:
          C = "S";
          break;
      }
      break;

    case "W":
      switch (N2) {
        case 1:
          C = "S";
          break;
        case -1:
          C = "N";
          break;
        case 2:
          C = "E";
          break;
      }
      break;

    case "S":
      switch (N2) {
        case 1:
          C = "E";
          break;
        case -1:
          C = "W";
          break;
        case 2:
          C = "N";
          break;
      }
      break;
    case "E":
      switch (N2) {
        case 1:
          C = "N";
          break;
        case -1:
          C = "S";
          break;
        case 2:
          C = "W";
          break;
      }
      break;
  }

  return C;
}
