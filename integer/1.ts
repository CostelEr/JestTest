/**
  A distance L is given in centimeters. Find the amount of full meters of this distance (1 m = 100 cm). 
  Use the operator of integer division.
 */
export function Metri(L: number) {
  return Math.trunc(L / 100);
}
