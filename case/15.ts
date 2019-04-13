/**
     The suits of playing cards are numbered as: 1 — spades, 2 — clubs, 3 — diamonds, 4 — hearts. 
     Card values "Jack", "Queen", "King", "Ace" are numbered as 11, 12, 13, 14 respectively. 
     A card value N (as an integer in the range  6 to 14) 
     and a suit M (as an integer in the range 1 to 4) are given. 
     Output the card description as: "six of diamonds", "queen of spades", etc.
 */
export function F(N, M: number) {
  let Cards = "Six of ";
  switch (N) {
    case 6:
      Cards = "Six of ";
      break;
    case 7:
      Cards = "Seven of ";
      break;
    case 8:
      Cards = "Eight of ";
      break;
    case 9:
      Cards = "Nine of ";
      break;
    case 10:
      Cards = "Ten of ";
      break;
    case 11:
      Cards = "Jack of ";
      break;
    case 12:
      Cards = "Queen of ";
      break;
    case 13:
      Cards = "King of ";
      break;
    case 14:
      Cards = "Ace of ";
      break;
  }
  switch (M) {
    case 1:
      Cards = Cards.concat("spades");
      break;
    case 2:
      Cards = Cards.concat("clubs");
      break;
    case 3:
      Cards = Cards.concat("diamonds");
      break;
    case 4:
      Cards = Cards.concat("hearts");
      break;
  }
  return Cards;
}
