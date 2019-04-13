/**
    Given an age in years (as an integer in the range 20 to 69), 
    output its alphabetic equivalent as: "twenty years", "thirty-two years", "forty-one years", etc.
 */
export function F(N: number) {
  let Years = "";
  let Z = Math.trunc(N / 10);
  switch (Z) {
    case 2:
      Years = "twenty";
      break;
    case 3:
      Years = "thirty";
      break;
    case 4:
      Years = "forty";
      break;
    case 5:
      Years = "fifty";
      break;
    case 6:
      Years = "sixty";
      break;
  }
  let U = N % 10;
  switch (U) {
    case 1:
      Years = Years.concat("-one");
      break;
    case 2:
      Years = Years.concat("-two");
      break;
    case 3:
      Years = Years.concat("-three");
      break;
    case 4:
      Years = Years.concat("-four");
      break;
    case 5:
      Years = Years.concat("-five");
      break;
    case 6:
      Years = Years.concat("-six");
      break;
    case 7:
      Years = Years.concat("-seven");
      break;
    case 8:
      Years = Years.concat("-eight");
      break;
    case 9:
      Years = Years.concat("-nine");
      break;
  }
  Years = Years.concat(" years");
  return Years;
}
