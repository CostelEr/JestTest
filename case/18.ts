/**
    Given an integer in the range 100 to 999, output its alphabetic equivalent. 
    For example, 100 — "one hundred", 256 — "two hundred and fifty-six", 
    814 — "eight hundred and fourteen", 901 — "nine hundred and one".
 */
export function F(N: number) {
  let Nmb = "";
  let S = Math.trunc(N / 100);
  switch (S) {
    case 1:
      Nmb = "one hundred";
      break;
    case 2:
      Nmb = "two hundred";
      break;

    case 3:
      Nmb = "three hundred";
      break;
    case 4:
      Nmb = "four hundred";
      break;
    case 5:
      Nmb = "five hundred";
      break;
    case 6:
      Nmb = "six hundred";
      break;
    case 7:
      Nmb = "seven hundred";
      break;
    case 8:
      Nmb = "eight hundred";
      break;
    case 9:
      Nmb = "nine hundred";
      break;
  }

  let Z = N % 100;

  switch (Z) {
    case 1:
      Nmb = Nmb.concat(" and one");
      break;
    case 2:
      Nmb = Nmb.concat(" and two");
      break;
    case 3:
      Nmb = Nmb.concat(" and three");
      break;

    case 4:
      Nmb = Nmb.concat(" and four");
      break;
    case 5:
      Nmb = Nmb.concat(" and five");
      break;
    case 6:
      Nmb = Nmb.concat(" and six");
      break;
    case 7:
      Nmb = Nmb.concat(" and seven");
      break;
    case 8:
      Nmb = Nmb.concat(" and eight");
      break;
    case 9:
      Nmb = Nmb.concat(" and nine");
      break;
    case 10:
      Nmb = Nmb.concat(" and ten");
      break;
    case 11:
      Nmb = Nmb.concat(" and eleven");
      break;
    case 12:
      Nmb = Nmb.concat(" and twelve");
      break;
    case 13:
      Nmb = Nmb.concat(" and thirteen");
      break;
    case 14:
      Nmb = Nmb.concat(" and fourteen");
      break;
    case 15:
      Nmb = Nmb.concat(" and fifteen");
      break;
    case 16:
      Nmb = Nmb.concat(" and sixteen");
      break;
    case 17:
      Nmb = Nmb.concat(" and seventeen");
      break;
    case 18:
      Nmb = Nmb.concat(" and eighteen");
      break;
    case 19:
      Nmb = Nmb.concat(" and nineteen");
      break;

    default:
      let Z1 = Math.trunc(Z / 10);
      switch (Z1) {
        case 2:
          Nmb = Nmb.concat(" and twenty");
          break;
        case 3:
          Nmb = Nmb.concat(" and thirty");
          break;
        case 4:
          Nmb = Nmb.concat(" and forty");
          break;
        case 5:
          Nmb = Nmb.concat(" and fifty");
          break;
        case 6:
          Nmb = Nmb.concat(" and sixty");
          break;
        case 7:
          Nmb = Nmb.concat(" and seventy");
          break;
        case 8:
          Nmb = Nmb.concat(" and eighty");
          break;
        case 9:
          Nmb = Nmb.concat(" and ninety");
          break;
      }
      let U = Z % 10;
      if (Z != 0) {
        switch (U) {
          case 1:
            Nmb = Nmb.concat("-one");
            break;
          case 2:
            Nmb = Nmb.concat("-two");
            break;
          case 3:
            Nmb = Nmb.concat("-three");
            break;
          case 4:
            Nmb = Nmb.concat("-four");
            break;
          case 5:
            Nmb = Nmb.concat("-five");
            break;
          case 6:
            Nmb = Nmb.concat("-six");
            break;
          case 7:
            Nmb = Nmb.concat("-seven");
            break;
          case 8:
            Nmb = Nmb.concat("-eight");
            break;
          case 9:
            Nmb = Nmb.concat("-nine");
            break;
        }
      }
      break;
  }
  return Nmb;
}
