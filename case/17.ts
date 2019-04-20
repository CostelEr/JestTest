/**
    Given an order number of some training task (as an integer in the range 10 to 40), 
    output its alphabetic equivalent as: "the eighteenth task", "the twenty-third task", 
    "the thirtieth task", etc.
 */
export function F(N: number) {
  let Tasks = "";
  let Z = Math.trunc(N / 10);

  switch (N) {
    case 10:
      Tasks = "the tenth";
      break;
    case 11:
      Tasks = "the eleventh";
      break;
    case 12:
      Tasks = "the twelfth";
      break;
    case 13:
      Tasks = "the thirteenth";
      break;
    case 14:
      Tasks = "the fourteenth";
      break;
    case 15:
      Tasks = "the fifteenth";
      break;
    case 16:
      Tasks = "the sixteenth";
      break;
    case 17:
      Tasks = "the seventeenth";
      break;
    case 18:
      Tasks = "the eighteenth";
      break;
    case 19:
      Tasks = "the nineteenth";
      break;

    default:
      switch (Z) {
        case 2:
          Tasks = "the twenty";
          break;
        case 3:
          Tasks = "the thirty";
          break;
        case 4:
          Tasks = "the forty";
          break;
      }
      let U = N % 10;
      switch (U) {
        case 1:
          Tasks = Tasks.concat("-one");
          break;
        case 2:
          Tasks = Tasks.concat("-two");
          break;
        case 3:
          Tasks = Tasks.concat("-three");
          break;
        case 4:
          Tasks = Tasks.concat("-four");
          break;
        case 5:
          Tasks = Tasks.concat("-five");
          break;
        case 6:
          Tasks = Tasks.concat("-six");
          break;
        case 7:
          Tasks = Tasks.concat("-seven");
          break;
        case 8:
          Tasks = Tasks.concat("-eight");
          break;
        case 9:
          Tasks = Tasks.concat("-nine");
          break;
      }
      break;
  }
  Tasks = Tasks.concat(" tasks");
  return Tasks;
}
