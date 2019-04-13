/**
  A robot can move in four directions 
  ("N" — north, "W" — west, "S" — south, "E" — east) 
  and perform three digital instructions: 
  0 — "move in the former direction", 1 — "turn left", −1 — "turn right". 
  A symbol C (an initial direction of the robot) and an integer N (an instruction) are given. 
  Output the direction of the robot (as symbol) after performing the instruction.
 */
export function F(C: string, N: number) {
  let D = C;

  switch (C) {
    case "N":
      if (N == 1) {
        D = "W";
      }
      if (N == -1) {
        D = "E";
      }
      break;

    case "W":
      if (N == 1) {
        D = "S";
      }
      if (N == -1) {
        D = "N";
      }
      break;

    case "S":
      if (N == 1) {
        D = "E";
      }
      if (N == -1) {
        D = "W";
      }
      break;

    case "E":
      if (N == 1) {
        D = "N";
      }
      if (N == -1) {
        D = "S";
      }
      break;
  }

  return D;
}
