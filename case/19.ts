/**
    One of the Asian calendars uses 60-years periods divided into 12-years cycles, 
    which are associated with a color: green, red, yellow, white, black. 
    Each year in a cycle is connected with some animal: rat, cow, tiger, hare, dragon, 
    snake, horse, sheep, monkey, hen, dog, pig. Given some year (as positive integer), 
    output its name provided that 1984 is "The Green Rat`s year".
 */
export function F(N: number) {
  let Animal = "";
  let B = Math.trunc(((N - 3) % 60) / 12);
  switch (B) {
    case 0:
      Animal = "The Green";
      break;
    case 1:
      Animal = "The Red";
      break;
    case 2:
      Animal = "The Yellow";
      break;
    case 3:
      Animal = "The White";
      break;
    case 4:
      Animal = "The Black";
      break;
  }
  let A = Math.trunc((N - 3) % 12);
  switch (A) {
    case 0:
      Animal = Animal.concat(" Pig's");
      break;
    case 1:
      Animal = Animal.concat(" Rat's");
      break;
    case 2:
      Animal = Animal.concat(" Cow's");
      break;
    case 3:
      Animal = Animal.concat(" Tiger's");
      break;
    case 4:
      Animal = Animal.concat(" Hare's");
      break;
    case 5:
      Animal = Animal.concat(" Dragon's");
      break;
    case 6:
      Animal = Animal.concat(" Snake's");
      break;
    case 7:
      Animal = Animal.concat(" Horse's");
      break;
    case 8:
      Animal = Animal.concat(" Sheep's");
      break;
    case 9:
      Animal = Animal.concat(" Monkey's");
      break;
    case 10:
      Animal = Animal.concat(" Hen's");
      break;
    case 11:
      Animal = Animal.concat(" Dog's");
      break;
  }
  Animal = Animal.concat(" year");
  return Animal;
}
